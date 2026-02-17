import { styled } from '@linaria/react'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: var(--color-neutral125);
  padding: 4px;
  border-radius: 20px;
  border: 1px solid var(--color-neutral250);
`

interface OptionProps {
  isActive: boolean
}

export const Option = styled.button<OptionProps>`
  background-color: ${(props) => (props.isActive ? 'var(--color-neutral0)' : 'transparent')};
  color: ${(props) => (props.isActive ? 'var(--color-text)' : 'var(--color-neutral600)')};
  border: none;
  border-radius: 16px;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: ${(props) => (props.isActive ? '0px 2px 4px rgba(0, 0, 0, 0.1)' : 'none')};
  white-space: nowrap;

  &:hover {
    color: var(--color-text);
  }
`
