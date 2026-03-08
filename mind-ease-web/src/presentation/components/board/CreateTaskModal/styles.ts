import { Input } from 'antd'
import { styled } from '@linaria/react'

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

export const Row = styled.div`
  display: flex;
  gap: 12px;
`

export const HalfGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

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

export const ChecklistSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ChecklistItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const ChecklistItemRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const ChecklistItemText = styled.span`
  font-size: 13px;
  color: var(--color-text);
  flex: 1;
`

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-subtext, #999);
  padding: 0 4px;
  display: flex;
  align-items: center;
  font-size: 14px;
  &:hover {
    color: var(--color-danger, #ff4d4f);
  }
`

export const AddChecklistRow = styled.div`
  display: flex;
  gap: 8px;
`

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 4px;
`
