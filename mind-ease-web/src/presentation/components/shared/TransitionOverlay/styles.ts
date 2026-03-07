import { styled } from '@linaria/react'

type OverlayPhase = 'hidden' | 'entering' | 'exiting'

interface OverlayProps {
  $phase: OverlayPhase
}

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  inset: 0;
  background: var(--color-bgColor, #ffffff);
  pointer-events: none;
  z-index: 9999;
  opacity: ${({ $phase }) => ($phase === 'entering' ? '0.92' : '0')};
  transition: opacity ${({ $phase }) => ($phase === 'entering' ? '0.15s' : '0.35s')} ease;
`

export type { OverlayPhase }
