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

    background-color: var(--color-buttonDefaultBG, #EFF6FF);
    border: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s, box-shadow 0.2s, transform 0.1s;

    &:hover {
      background-color: var(--color-buttonDefaultHoverBG, #DBEBFF) !important;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.22) !important;
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.97);
    }

    .anticon {
      font-size: 16px;
      color: var(--color-buttonDefaultText, #002D63);
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
  display:flex;
  flex-direction:column;
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
