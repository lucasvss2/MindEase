import { Modal, type ModalProps } from 'antd'
import { styled } from '@linaria/react'

interface CustomizableDiaglogProps {
  $type: 'danger' | 'default'
  $width?: string
  $height?: string
  $bodyHeight?: string
}

type FilteredModalProps = ModalProps & {
  $type?: 'danger' | 'default'
  $width?: string
  $height?: string
  $bodyHeight?: string
  children?: React.ReactNode
}

const FilteredModal = ({ $type, $width, $height, $bodyHeight, ...props }: FilteredModalProps) => (
  <Modal {...props} />
)

export const CustomizableDiaglog = styled(FilteredModal) <CustomizableDiaglogProps>`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: ${({ $width }) => $width || '600px'} !important;
  height: ${({ $height }) => $height || '250px'} !important;

  && .ant-modal-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    padding: 32px;
    
    color: ${({ $type }) => ($type === 'danger' ? 'var(--color-dialogDangerText)' : 'var(--color-dialogDefaultText)')} !important;
    background-color: ${({ $type }) => ($type === 'danger' ? 'var(--color-dialogDangerBG)' : 'var(--color-dialogDefaultBG)')} !important;
    border: ${({ $type }) => ($type === 'danger' ? 'var(--color-dialogDangerBorder)' : 'var(--color-dialogDefaultBorder)')} !important;
    border-radius: 8px !important;
  }

  .ant-modal-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  .ant-modal-title{
    color: ${props => props.$type === 'danger' ? 'var(--color-dialogDangerTitle)' : 'var(--color-dialogDefaultTitle)'} !important;
  }

  .ant-modal-close{
    svg{
      fill: var(--color-black);
    }
  } 
    
`