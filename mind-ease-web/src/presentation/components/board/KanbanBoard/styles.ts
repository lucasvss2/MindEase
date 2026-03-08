import { styled } from '@linaria/react'

export const Board = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: flex-start;
  overflow-x: auto;
  padding-bottom: 16px;
  min-height: 200px;
`

export const AddColumnButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border: 2px dashed var(--color-cardDivider);
  border-radius: 12px;
  background: transparent;
  color: var(--color-cardText);
  font-size: calc(14px + var(--font-size-offset));
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  min-width: 220px;
  height: 48px;
  transition:
    border-color 0.2s ease,
    color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    border-color: var(--color-brand);
    color: var(--color-brand);
  }
`
