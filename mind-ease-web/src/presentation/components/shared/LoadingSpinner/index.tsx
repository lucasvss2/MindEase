import { LoadingOutlined } from '@ant-design/icons'
import { Spin, SpinProps } from 'antd'

interface LoadingSpinnerProps extends SpinProps {}

export const LoadingSpinner = ({ ...props }: LoadingSpinnerProps) => {
  const loadingIcon = <LoadingOutlined spin />

  return <Spin indicator={loadingIcon} {...props} />
}
