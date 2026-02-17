import { styled } from "@linaria/react";
import { Input } from "antd";

interface ResponsiveInputProps {
  $width?: string
  $height?: string
}

export const ResponsiveInput = styled(Input) <ResponsiveInputProps>`
  width: ${(props) => props.$width || '100%'};
  height: ${(props) => props.$height || '56px'};
  border-radius: 8px;
  padding: 0 16px;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  outline: none;
  &.ant-input {
    border: var(--color-inputDefaultBorder)!important;
    background-color: var(--color-inputDefaultBG)!important;
    color: var(--color-inputDefaultText)!important;
  }
  &.ant-input:focus {
    border: var(--color-inputDefaultBorder)!important;
  }
  &.ant-input-disabled {
    background-color: var(--color-inputDefaultBG)!important;
    cursor: not-allowed;
    border: var(--color-inputDefaultBorder)!important;
    color: var(--color-inputDefaultText)!important;
  }
  &.ant-input-status-error {
    border: var(--color-inputErrorBorder)!important;
    background-color: var(--color-inputErrorBG)!important;
    color: var(--color-inputErrorText)!important;
  }
  &.ant-input-status-error:focus {
    border: var(--color-inputErrorBorder)!important;
    box-shadow: none !important;
  }
`