import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, Card } from "@/presentation/components";
import { THEME_COLORS } from "@/presentation/constants/theme";
import { cn } from "@/utils/twClassnamesResolver";

export interface TaskFormViewProps {
  title: string;
  setTitle: (v: string) => void;
  description: string;
  setDescription: (v: string) => void;
  checklistItems: { label: string; completed: boolean }[];
  checklistInput: string;
  setChecklistInput: (v: string) => void;
  checklistCompleted: number;
  checklistTotal: number;
  onAddChecklistItem: () => void;
  onToggleChecklistItem: (index: number) => void;
  onRemoveChecklistItem: (index: number) => void;
  focusDurationMinutes: number;
  setFocusDurationMinutes: (minutes: number) => void;
  timeSpentLabel: string;
  onSave: () => void;
}

export function TaskFormView({
  title,
  setTitle,
  description,
  setDescription,
  checklistItems,
  checklistInput,
  setChecklistInput,
  checklistCompleted,
  checklistTotal,
  onAddChecklistItem,
  onToggleChecklistItem,
  onRemoveChecklistItem,
  focusDurationMinutes,
  setFocusDurationMinutes,
  timeSpentLabel,
  onSave,
}: TaskFormViewProps) {
  return (
    <ScrollView
      className={cn("flex-1")}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 24,
        paddingBottom: 24,
      }}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <Card className={cn("gap-4")}>
        <View>
          <Text className="text-sm font-lexend-regular text-neutral-600 mb-2">
            Título
          </Text>
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="Ex.: Revisar documentação"
            placeholderTextColor={THEME_COLORS.neutral[600]}
            className={cn(
              "border border-neutral-200 rounded-lg px-4 py-3 text-base font-lexend-regular text-neutral-1000"
            )}
            autoCapitalize="sentences"
          />
        </View>
        <View>
          <Text className="text-sm font-lexend-regular text-neutral-600 mb-2">
            Descrição
          </Text>
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Ex.: Revisar contratos e enviar feedback até sexta."
            placeholderTextColor={THEME_COLORS.neutral[600]}
            className={cn(
              "border border-neutral-200 rounded-lg px-4 py-3 text-base font-lexend-regular text-neutral-1000"
            )}
            style={{ minHeight: 100, textAlignVertical: "top" }}
            multiline
            numberOfLines={4}
            autoCapitalize="sentences"
          />
        </View>
      </Card>

      <Card className={cn("gap-4 mt-5")}>
        <View className={cn("flex-row items-center gap-2")}>
          <MaterialCommunityIcons
            name="format-list-checks"
            size={22}
            color={THEME_COLORS.neutral[1000]}
          />
          <Text className="text-base font-lexend-semi-bold text-neutral-1000">
            Checklist ({checklistCompleted}/{checklistTotal})
          </Text>
        </View>

        {checklistItems.length > 0 && (
          <View className={cn("gap-3")}>
            {checklistItems.map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 12,
                  minHeight: 40,
                  backgroundColor: THEME_COLORS.neutral[100],
                  borderRadius: 8,
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                }}
              >
                <TouchableOpacity
                  onPress={() => onToggleChecklistItem(index)}
                  activeOpacity={0.7}
                  hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  accessibilityRole="checkbox"
                  accessibilityState={{ checked: item.completed }}
                  accessibilityLabel={
                    item.completed
                      ? "Marcar como pendente"
                      : "Marcar como concluído"
                  }
                >
                  <MaterialCommunityIcons
                    name={
                      item.completed ? "radiobox-marked" : "radiobox-blank"
                    }
                    size={24}
                    color={
                      item.completed
                        ? THEME_COLORS.blue[600]
                        : THEME_COLORS.neutral[600]
                    }
                  />
                </TouchableOpacity>
                <Text
                  className={cn(
                    "flex-1 text-base font-lexend-regular text-neutral-1000",
                    item.completed && "text-neutral-600 line-through"
                  )}
                  style={{ flexWrap: "wrap" }}
                  numberOfLines={0}
                >
                  {item.label}
                </Text>
                <TouchableOpacity
                  onPress={() => onRemoveChecklistItem(index)}
                  activeOpacity={0.7}
                  hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  accessibilityRole="button"
                  accessibilityLabel="Remover item"
                >
                  <MaterialCommunityIcons
                    name="delete-outline"
                    size={22}
                    color="#DC2626"
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
          }}
        >
          <TextInput
            value={checklistInput}
            onChangeText={setChecklistInput}
            placeholder="Adicionar item"
            placeholderTextColor={THEME_COLORS.neutral[600]}
            className={cn(
              "flex-1 border border-neutral-200 rounded-lg px-3 py-2 text-base font-lexend-regular text-neutral-1000"
            )}
            style={{ minHeight: 40 }}
            autoCapitalize="sentences"
            onSubmitEditing={onAddChecklistItem}
          />
          <TouchableOpacity
            onPress={onAddChecklistItem}
            activeOpacity={0.7}
            style={{
              width: 40,
              height: 40,
              borderRadius: 8,
              backgroundColor: THEME_COLORS.blue[600],
              alignItems: "center",
              justifyContent: "center",
            }}
            accessibilityRole="button"
            accessibilityLabel="Adicionar item ao checklist"
          >
            <MaterialCommunityIcons
              name="plus"
              size={22}
              color={THEME_COLORS.neutral[0]}
            />
          </TouchableOpacity>
        </View>
      </Card>

      <Card className={cn("mt-5 gap-4")}>
        <View className={cn("flex-row items-center gap-2")}>
          <MaterialCommunityIcons
            name="timer-outline"
            size={22}
            color={THEME_COLORS.neutral[1000]}
          />
          <Text className="text-base font-lexend-semi-bold text-neutral-1000">
            Configurações de foco
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <TextInput
            value={String(focusDurationMinutes)}
            onChangeText={(text) => {
              if (text === "") setFocusDurationMinutes(25);
              else {
                const n = parseInt(text, 10);
                if (!Number.isNaN(n)) setFocusDurationMinutes(n);
              }
            }}
            placeholder="25"
            placeholderTextColor={THEME_COLORS.neutral[600]}
            keyboardType="number-pad"
            maxLength={3}
            className={cn(
              "border border-neutral-200 rounded-lg px-3 py-2 text-base font-lexend-regular text-neutral-1000 text-center"
            )}
            style={{ width: 56, minHeight: 40 }}
          />
          <Text className="text-sm font-lexend-regular text-neutral-600">
            minutos de foco
          </Text>
        </View>
      </Card>

      <Card className={cn("mt-5 flex-row items-center justify-between")}>
        <View className={cn("flex-row items-center gap-2")}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={22}
            color={THEME_COLORS.neutral[1000]}
          />
          <Text className="text-base font-lexend-regular text-neutral-1000">
            Tempo gasto
          </Text>
        </View>
        <Text className="text-base font-lexend-semi-bold text-neutral-1000">
          {timeSpentLabel}
        </Text>
      </Card>

      <Button
        variant="default"
        onPress={onSave}
        className={cn("w-full py-3 mt-6")}
      >
        Salvar tarefa
      </Button>
    </ScrollView>
  );
}
