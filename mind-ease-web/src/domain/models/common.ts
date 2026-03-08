export type BaseModalProps = {
  isOpen: boolean
  onClose: () => void
}

export type ApiError = Error & {
  response?: {
    status: number
    data?: {
      details?: string[]
      instance?: string
      title?: string
      type?: string
      message?: string
    }
  }
}

export type RefreshToken = {
  scope: string
  username: string
  'cognito:groups': string[]
}

export type SelectWithLabel<T> = {
  key: T
  value: T
  label: string
  disabled?: boolean
  title?: string
}

export type ListResponse<T, K extends string = string> = {
  [key in K]: T[]
} & {
  total: number
  per_page: number
  page: number
  total_pages: number
}
