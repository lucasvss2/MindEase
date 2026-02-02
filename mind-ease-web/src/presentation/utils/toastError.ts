import { ApiError } from '@/domain'
import { showToast } from './toast'

interface ToastErrorProps {
  error: ApiError
  errorMessages?: Record<string, string>
  defaultMessage?: string
}

export const toastError = ({ error, errorMessages, defaultMessage = 'Ocorreu um erro inesperado.' }: ToastErrorProps) => {
  const status = error.response?.status
  // Example logic, adapt if needed
  const message = (status && errorMessages?.[status]) || defaultMessage

  showToast({
    type: 'error',
    message: 'Erro',
    description: message
  })
}
