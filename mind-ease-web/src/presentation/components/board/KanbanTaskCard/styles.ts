import { styled } from '@linaria/react'

export const Card = styled.div`
  background-color: var(--color-bgColor);
  border: var(--color-cardBorder);
  border-radius: 12px;
  padding: 14px 14px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: default;
  box-shadow: var(--box-shadow-sm);
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: 0 4px 16px rgba(88, 84, 84, 0.32);
  }
`

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`

export const DragHandle = styled.span`
  cursor: grab;
  color: var(--color-cardText);
  flex-shrink: 0;
  margin-top: 1px;
  font-size: calc(14px + var(--font-size-offset));
`

export const CardTitleBlock = styled.div`
  flex: 1;
  min-width: 0;
  overflow: hidden;
`

export const CardTitle = styled.p`
  font-size: calc(14px + var(--font-size-offset));
  font-weight: 600;
  color: var(--color-cardTitle);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;

  &:hover {
    text-decoration: underline dotted;
    text-underline-offset: 2px;
  }
`

export const CardTitleInput = styled.input`
  width: 100%;
  font-size: calc(14px + var(--font-size-offset));
  font-weight: 600;
  color: var(--color-cardTitle);
  background: var(--color-inputDefaultBG);
  border: 1px solid var(--color-brand);
  border-radius: 4px;
  outline: none;
  padding: 1px 4px;
  margin: 0;
  box-sizing: border-box;
`

export const CardDescription = styled.p`
  font-size: calc(12px + var(--font-size-offset));
  color: var(--color-cardText);
  margin: 4px 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: default;

  &[data-empty] {
    font-style: italic;
    opacity: 0.5;
  }

  &:hover {
    text-decoration: underline dotted;
    text-underline-offset: 2px;
  }
`

export const CardDescInput = styled.textarea`
  width: 100%;
  font-size: calc(12px + var(--font-size-offset));
  color: var(--color-cardTitle);
  background: var(--color-inputDefaultBG);
  border: 1px solid var(--color-brand);
  border-radius: 4px;
  outline: none;
  padding: 2px 4px;
  margin: 4px 0 0;
  resize: none;
  box-sizing: border-box;
  font-family: inherit;

  &::placeholder {
    color: var(--color-inputDefaultPlaceholder);
    font-style: italic;
  }
`

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px 4px;
  border-radius: 4px;
  color: var(--color-cardText);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  transition: background-color 0.15s;

  &:hover {
    background-color: var(--color-buttonNeutralHoverBG);
    color: var(--color-cardTitle);
  }
`

export const ChecklistSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const ChecklistLabel = styled.span`
  font-size: calc(12px + var(--font-size-offset));
  font-weight: 500;
  color: var(--color-cardText);
`

export const ChecklistItem = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: calc(13px + var(--font-size-offset));
  cursor: pointer;
  color: var(--color-cardText);

  input[type='checkbox'] {
    appearance: none;
    -webkit-appearance: none;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    border: 2px solid var(--color-cardDivider);
    flex-shrink: 0;
    position: relative;
    cursor: pointer;
    transition:
      background-color 0.15s,
      border-color 0.15s;

    &:checked {
      background-color: var(--color-brand);
      border-color: var(--color-brand);
      background-image: url("data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 4L3.5 6.5L9 1' stroke='white' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  &.concluded span {
    text-decoration: line-through;
    color: var(--color-cardText);
  }
`

export const ChecklistItemText = styled.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const ChecklistDeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 2px;
  color: var(--color-cardText);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  font-size: calc(10px + var(--font-size-offset));
  opacity: 0;
  transition:
    opacity 0.15s,
    color 0.15s;

  label:hover > & {
    opacity: 1;
  }

  &:hover {
    color: #f87171;
    opacity: 1;
  }
`

export const AddChecklistRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
`

export const AddChecklistInput = styled.input`
  flex: 1;
  background: var(--color-inputDefaultBG);
  border: var(--color-cardBorder);
  border-radius: 6px;
  outline: none;
  font-size: calc(12px + var(--font-size-offset));
  color: var(--color-inputDefaultText);
  padding: 5px 8px;

  &::placeholder {
    color: var(--color-inputDefaultPlaceholder);
  }

  &:focus {
    border: 1px solid var(--color-brand);
    color: var(--color-inputDefaultText);
  }
`

export const AddChecklistButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-cardText);
  padding: 2px;
  display: flex;
  align-items: center;
  font-size: calc(16px + var(--font-size-offset));
  transition: color 0.15s;

  &:hover {
    color: var(--color-brand);
  }
`

export const FocusSection = styled.div`
  background-color: var(--color-buttonDefaultBG);
  border: var(--color-cardBorder);
  border-radius: 8px;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const FocusLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: calc(12px + var(--font-size-offset));
  font-weight: 600;
  color: var(--color-link);
  white-space: nowrap;
`

export const FocusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: nowrap;
`

export const FocusInput = styled.input`
  width: calc(52px + var(--font-size-offset) * 3);
  padding: 4px 6px;
  border: var(--color-cardBorder);
  border-radius: 6px;
  font-size: calc(13px + var(--font-size-offset));
  background: var(--color-inputDefaultBG);
  color: var(--color-inputDefaultText);
  text-align: center;
  outline: none;

  &:focus {
    border: 1px solid var(--color-brand);
  }
`

export const FocusUnit = styled.span`
  font-size: calc(12px + var(--font-size-offset));
  color: var(--color-cardText);
  white-space: nowrap;
`

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
`

export const TimerDisplay = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: calc(12px + var(--font-size-offset));
  color: var(--color-cardText);
`

export const StartFocusButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #2dd4bf;
  color: var(--color-bgColor);
  border: none;
  border-radius: 8px;
  padding: 6px 14px;
  font-size: calc(13px + var(--font-size-offset));
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.15s;
  white-space: nowrap;

  &:hover {
    opacity: 0.88;
  }
`
