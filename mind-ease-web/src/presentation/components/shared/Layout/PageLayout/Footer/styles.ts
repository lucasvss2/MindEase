import { styled } from '@linaria/react'
import { Layout } from 'antd'

export const Footer = styled(Layout.Footer)`
  display: flex;
  flex-direction: row;
  align-items: center !important;
  justify-content: center !important;
  gap: 8px;
  border-top: 1px solid var(--color-borderHeader);
  background-color: var(--color-bgColor);
  color: var(--color-brand);
  font-weight: 700;
  height: 50px;
  p {
    margin: 0;
  }
`
