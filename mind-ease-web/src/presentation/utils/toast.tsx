import { toast } from 'sonner'
import { ReactNode } from 'react'

type ToastType = 'success' | 'error' | 'info' | 'warning'

interface ToastProps {
  type?: ToastType
  message: string
  description?: string
  icon?: ReactNode
}

export const showToast = ({ type = 'info', message, description, icon }: ToastProps) => {
  const options = {
    description,
    icon
  }

  switch (type) {
    case 'success':
      toast.success(message, options)
      break
    case 'error':
      toast.error(message, options)
      break
    case 'warning':
      toast.warning(message, options)
      break
    default:
      toast.info(message, options)
  }
}

interface ToastPromiseProps<T> {
  promise: Promise<T>
  loading: string
  success: (data: T) => ReactNode | string
  error: (error: any) => ReactNode | string
  className?: string
}

export const showToastPromise = <T,>({ promise, loading, success, error, className }: ToastPromiseProps<T>) => {
  return toast.promise(promise, {
    loading,
    success,
    error,
    className
  })
}
