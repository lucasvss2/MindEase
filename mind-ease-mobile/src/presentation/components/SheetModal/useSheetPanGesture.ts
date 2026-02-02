import { useState, useRef, useMemo, useEffect } from "react";
import { Animated, PanResponder, useWindowDimensions } from "react-native";

/** Padrão: [mínimo%, máximo%]. Ex: [65, 90] */
const DEFAULT_SNAP_POINTS: [number, number] = [65, 90];
const DEFAULT_INITIAL_SNAP_INDEX = 0; // abre no mínimo (65%)
const SWIPE_CLOSE_THRESHOLD = 80;

/** Normaliza para [min%, max%] e converte para razões 0–1. */
function toMinMaxRatios(snapPoints: [number, number]): [number, number] {
  const [a, b] = snapPoints;
  const min = Math.min(a, b) / 100;
  const max = Math.max(a, b) / 100;
  return [min, max];
}

function getNearestSnapPoint(currentHeight: number, snapPoints: number[]): number {
  let nearest = snapPoints[0];
  let minDist = Math.abs(currentHeight - nearest);
  for (let i = 1; i < snapPoints.length; i++) {
    const dist = Math.abs(currentHeight - snapPoints[i]);
    if (dist < minDist) {
      minDist = dist;
      nearest = snapPoints[i];
    }
  }
  return nearest;
}

export interface UseSheetPanGestureOptions {
  visible: boolean;
  onClose: () => void;
  snapPoints?: [number, number];
  initialSnapIndex?: 0 | 1;
}

export function useSheetPanGesture({
  visible,
  onClose,
  snapPoints: snapPointsProp = DEFAULT_SNAP_POINTS,
  initialSnapIndex = DEFAULT_INITIAL_SNAP_INDEX,
}: UseSheetPanGestureOptions) {
  const { height: windowHeight } = useWindowDimensions();
  const [minRatio, maxRatio] = useMemo(
    () => toMinMaxRatios(snapPointsProp),
    [snapPointsProp]
  );
  const sheetMinHeight = useMemo(() => windowHeight * minRatio, [windowHeight, minRatio]);
  const sheetMaxHeight = useMemo(() => windowHeight * maxRatio, [windowHeight, maxRatio]);
  const snapPointsHeights = useMemo(
    () => [sheetMinHeight, sheetMaxHeight],
    [sheetMinHeight, sheetMaxHeight]
  );
  const initialSheetHeight = initialSnapIndex === 1 ? sheetMaxHeight : sheetMinHeight;

  const translateY = useRef(new Animated.Value(0)).current;
  const currentHeightRef = useRef(initialSheetHeight);
  const startHeightRef = useRef(initialSheetHeight);
  const isClosingGestureRef = useRef(false);

  const [sheetHeight, setSheetHeight] = useState(initialSheetHeight);

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: (_, gestureState) => {
          return Math.abs(gestureState.dy) > 5;
        },
        onPanResponderGrant: () => {
          startHeightRef.current = currentHeightRef.current;
          isClosingGestureRef.current = false;
        },
        onPanResponderMove: (_, gestureState) => {
          const dy = gestureState.dy;
          if (dy < 0) {
            isClosingGestureRef.current = false;
            const newHeight = Math.min(
              sheetMaxHeight,
              startHeightRef.current + Math.abs(dy)
            );
            currentHeightRef.current = newHeight;
            setSheetHeight(newHeight);
            translateY.setValue(0);
          } else {
            const newHeight = startHeightRef.current - dy;
            if (newHeight >= sheetMinHeight) {
              currentHeightRef.current = newHeight;
              setSheetHeight(newHeight);
              translateY.setValue(0);
            } else {
              isClosingGestureRef.current = true;
              currentHeightRef.current = sheetMinHeight;
              setSheetHeight(sheetMinHeight);
              const excess = dy - (startHeightRef.current - sheetMinHeight);
              translateY.setValue(excess);
            }
          }
        },
        onPanResponderRelease: (_, gestureState) => {
          const shouldClose =
            gestureState.dy > SWIPE_CLOSE_THRESHOLD ||
            gestureState.vy > 0.3;
          if (shouldClose && isClosingGestureRef.current) {
            Animated.timing(translateY, {
              toValue: sheetMaxHeight,
              duration: 200,
              useNativeDriver: true,
            }).start(() => {
              translateY.setValue(0);
              setSheetHeight(initialSheetHeight);
              currentHeightRef.current = initialSheetHeight;
              onClose();
            });
          } else {
            const nearest = getNearestSnapPoint(
              currentHeightRef.current,
              snapPointsHeights
            );
            currentHeightRef.current = nearest;
            setSheetHeight(nearest);
            Animated.spring(translateY, {
              toValue: 0,
              useNativeDriver: true,
              damping: 20,
              stiffness: 300,
            }).start();
          }
        },
      }),
    [
      sheetMinHeight,
      sheetMaxHeight,
      initialSheetHeight,
      snapPointsHeights,
      onClose,
      translateY,
    ]
  );

  useEffect(() => {
    if (visible) {
      currentHeightRef.current = initialSheetHeight;
      startHeightRef.current = initialSheetHeight;
      setSheetHeight(initialSheetHeight);
      translateY.setValue(sheetMaxHeight);
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
        damping: 20,
        stiffness: 300,
      }).start();
    }
  }, [
    visible,
    sheetMaxHeight,
    initialSheetHeight,
    translateY,
  ]);

  return {
    panHandlers: panResponder.panHandlers,
    sheetHeight,
    translateY,
    sheetMaxHeight,
    windowHeight,
  };
}
