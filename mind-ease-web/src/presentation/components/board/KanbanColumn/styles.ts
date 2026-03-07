import { styled } from '@linaria/react'

interface ColumnProps {
  $bgColor?: string
}

export const Column = styled.div<ColumnProps>`
  background-color: ${({ $bgColor }) => $bgColor || 'var(--color-cardBG)'};
  border: var(--color-cardBorder);
  border-radius: 12px;
  padding: 16px;
  min-width: 280px;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-shrink: 0;
  transition: background-color 0.2s;
`

export const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`

export const ColumnTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
  flex: 1;
`

export const ColumnTitleInput = styled.input`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--color-brand);
  outline: none;
  width: 100%;
  padding: 0 0 2px;
`

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 6px;
  border-radius: 6px;
  color: var(--color-cardTitle);
  display: flex;
  align-items: center;
  transition: background-color 0.15s;

  &:hover {
    background-color: var(--color-buttonNeutralHoverBG);
  }
`

export const CardsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 120px;
  flex: 1;
`

export const ColumnActions = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  flex-shrink: 0;
`

export const TaskCount = styled.span`
  font-weight: 400;
  color: var(--color-cardText);
  font-size: 13px;
`

export const DragHandle = styled.span`
  cursor: grab;
  color: var(--color-cardText);
  padding: 4px;
  display: flex;
  align-items: center;

  &:active {
    cursor: grabbing;
  }
`

export const ColorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  padding: 6px 2px 2px;
`

interface ColorDotProps {
  $color: string
  $selected: boolean
}

export const ColorDot = styled.button<ColorDotProps>`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color || '#ffffff'};
  border: ${({ $selected }) =>
    $selected ? '2.5px solid var(--color-brand)' : '1.5px solid var(--color-cardDivider)'};
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition: transform 0.12s;
  box-shadow: var(--box-shadow-sm);

  &:hover {
    transform: scale(1.2);
  }
`
