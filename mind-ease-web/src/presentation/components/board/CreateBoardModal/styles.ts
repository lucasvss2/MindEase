import { Input } from 'antd'
import { styled } from '@linaria/react'

export const ResponsiveTextArea = styled(Input.TextArea)`
  border-radius: 8px !important;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  resize: none;
  &.ant-input {
    border: var(--color-inputDefaultBorder) !important;
    background-color: var(--color-inputDefaultBG) !important;
    color: var(--color-inputDefaultText) !important;
  }
  &.ant-input:focus {
    border: var(--color-inputDefaultBorder) !important;
    box-shadow: none !important;
  }
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px 0 8px;
`

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Label = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
`

export const Optional = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: var(--color-subtext, #999);
  margin-left: 4px;
`

export const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
`

interface ColorSwatchProps {
  $color: string
  $selected: boolean
}

export const ColorSwatch = styled.button<ColorSwatchProps>`
  aspect-ratio: 1;
  border-radius: 12px;
  background-color: ${({ $color }) => $color};
  border: ${({ $selected }) =>
    $selected ? '3px solid var(--color-text)' : '3px solid transparent'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.15s ease;
  padding: 0;

  &:hover {
    border-color: var(--color-text);
    opacity: 0.9;
  }
`

export const SelectionDot = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--color-text);
  border: 2px solid white;
  display: block;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 8px;
`
