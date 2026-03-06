import { FloatButton, Layout } from 'antd'
import { styled } from '@linaria/react'

export const SidebarContainer = styled(Layout)`
  flex: 1;
  flex-direction: row;
  overflow: hidden;
  position: relative;

  .ant-layout-sider {
    background-color: #fff;
  }

  .ant-layout-content {
    width: 0;
  }
`

export const Container = styled(Layout)`
  && {
    height: 100vh !important;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
`

export const FloatButtonContainer = styled(FloatButton.Group)`
  position: fixed;
  top: 74px;
  right: 24px;
  
  /* Trigger Button */
  &.ant-float-btn-group {
    width: 45px !important;
    height: 45px !important;
    min-width: 45px !important;
    min-height: 45px !important;

    /* The trigger button itself */
    .ant-float-btn-group-trigger {
      width: 45px !important;
      height: 45px !important;
      border-radius: 50% !important;
      
      /* Ensure icon is centered */
      display: flex;
      justify-content: center;
      align-items: center;
      
      .ant-float-btn-icon {
        width: auto;
        height: auto;
        font-size: 20px; /* Adjust icon size if needed */
      }
    }

    .ant-float-btn-body {
      width: 45px !important;
      height: 45px !important;
      border-radius: 50% !important;
    }
  }

  /* Default Button Styles (Trigger) */
  background-color: var(--color-buttonDefaultBG) !important;
  border-radius: 50% !important;
  
  .ant-float-btn-body {
    background-color: transparent !important;
  }

  .ant-float-btn-content {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-buttonDefaultText) !important;
    font-weight: 500;
  }

  /* Hover State (Trigger) */
  &:hover {
    background-color: var(--color-buttonDefaultHoverBG) !important;
    .ant-float-btn-content {
      color: var(--color-buttonDefaultHoverText) !important;
    }
  }

  /* Active State (Trigger) */
  &:active {
    background-color: var(--color-buttonDefaultActiveBG) !important;
    .ant-float-btn-content {
      color: var(--color-buttonDefaultActiveText) !important;
    }
  }

  /* Force open downwards & Style Items */
  .ant-float-btn-group-wrap,
  .ant-float-btn-group-list {
    display: flex;
    flex-direction: column;
    align-items: flex-end !important; /* Align items to the right */
    
    bottom: auto !important;
    top: 100% !important;
    
    /* Reset AntD absolute positioning that causes overflow */
    right: 0 !important;
    left: auto !important;
    
    margin-bottom: 0;
    margin-top: 16px;
    padding: 0 !important; /* Ensure no padding shifts items */
    width: auto !important; /* Allow growing to fit items */
    
    transform: none !important;
    
    /* Style inner buttons (Login/Register) */
    .ant-float-btn {
      width: 100px !important;
      height: 45px !important;
      border-radius: 8px !important;
      margin-bottom: 8px;
      margin-right: 0 !important; /* Ensure no margin shifts items */
      left: auto !important; /* Reset AntD default positioning */
      
      background-color: var(--color-buttonDefaultBG) !important;
      
      .ant-float-btn-body {
        width: 100% !important;
        height: 100% !important;
        border-radius: 8px !important;
      }

      .ant-float-btn-content {
        width: 100%;
        height: 100%;
      }

      &:hover {
        background-color: var(--color-buttonDefaultHoverBG) !important;
        .ant-float-btn-content {
          color: var(--color-buttonDefaultHoverText) !important;
        }
      }
    }
  }
`

export const CenterLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const Content = styled(Layout.Content)`
  && {
    padding: 16px 24px 24px;
    display: flex;
    flex-direction: column;
    margin: 16px 0;
    overflow-y: auto;
    height: 100%;

    &.no-padding {
      padding: 0;
      margin: 0;
      overflow-y: auto;
    }
  }
`

