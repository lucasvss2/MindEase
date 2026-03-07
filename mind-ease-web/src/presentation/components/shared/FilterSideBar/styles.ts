import { Button, Layout } from 'antd'
import { styled } from '@linaria/react'

interface OuterWrapperProps {
  $isOpen: boolean
}

export const OuterWrapper = styled.div<OuterWrapperProps>`
  display: flex;
  flex-direction: row;
  height: 100%;
  overflow: visible;
  position: relative;
  /* When closed, hold just enough width for the floating button */
  min-width: ${({ $isOpen }) => ($isOpen ? '0' : '64px')};
  flex-shrink: 0;
`

/* Visible only when sidebar is open — thin strip with trigger icon */
export const TriggerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48px;
  min-width: 48px;
  padding: 8px 0;
  background-color: var(--color-bgColor);
  border-right: 1px solid var(--color-cardBorder, #e8e8e8);
`

/* Floating pill button — shown when sidebar is CLOSED */
export const FloatingOpenButton = styled(Button)`
  && {
    position: absolute;
    top: 16px;
    left: 8px;
    z-index: 10;

    width: 48px;
    height: 48px;
    border-radius: 12px;

    background-color: var(--color-buttonDefaultBG, #eff6ff);
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);

    display: flex;
    align-items: center;
    justify-content: center;

    transition:
      background-color 0.2s,
      box-shadow 0.2s,
      transform 0.1s;

    &:hover {
      background-color: var(--color-buttonDefaultHoverBG, #dbebff) !important;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.22) !important;
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.97);
    }

    .anticon {
      font-size: 16px;
      color: var(--color-buttonDefaultText, #002d63);
    }
  }
`

export const InlinePanelWrapper = styled(Layout.Sider)`
  overflow: hidden;
  flex-shrink: 0;
  background-color: var(--color-bgColor) !important;
  border-right: 1px solid var(--color-cardBorder, #e8e8e8);

  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
  }
`

export const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 8px;
  font-size: 16px;
  font-weight: 700;
  color: var(--color-titleText);
  background-color: var(--color-bgColor);
`

export const PanelContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 24px 16px;
  overflow-y: auto;
  gap: 24px;
  align-items: center;
`

export const PanelFooter = styled.div`
  padding: 12px 16px;
  border-top: 1px solid var(--color-cardBorder, #e8e8e8);
`

export const SidebarTrigger = styled(Button)`
  width: 100%;
  border-radius: 0;

  .anticon {
    font-size: 18px;
    color: var(--color-text);
  }
`

export const ComplexityGroup = styled.div`
  padding: 12px 16px 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const ComplexityLabel = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: var(--color-cardText);
  text-transform: uppercase;
  letter-spacing: 0.06em;
`

export const ComplexityButtons = styled.div`
  display: flex;
  gap: 4px;
`

interface ComplexityButtonProps {
  $active: boolean
}

export const ComplexityButton = styled.button<ComplexityButtonProps>`
  flex: 1;
  padding: 6px 8px;
  border-radius: 6px;
  border: 1px solid
    ${({ $active }) => ($active ? 'var(--color-brand)' : 'var(--color-cardDivider)')};
  background-color: ${({ $active }) => ($active ? 'var(--color-buttonDefaultBG)' : 'transparent')};
  color: ${({ $active }) => ($active ? 'var(--color-brand)' : 'var(--color-cardText)')};
  font-size: 12px;
  font-weight: ${({ $active }) => ($active ? '700' : '500')};
  cursor: pointer;
  transition:
    background-color 0.15s,
    border-color 0.15s;

  &:hover {
    background-color: var(--color-buttonDefaultBG);
    border-color: var(--color-brand);
    color: var(--color-brand);
  }
`
