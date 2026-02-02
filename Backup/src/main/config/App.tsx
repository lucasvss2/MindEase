import { ConfigProvider } from 'antd'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'sonner'

import ptBR from 'antd/es/locale/pt_BR'

import { Routes } from './routes'
import { antdTheme } from './styles'
import './styles/global.css'
import { queryClient } from '@/infra'

import './styles/font.css'

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={antdTheme} locale={ptBR}>
        <Routes />
        <Toaster
          richColors
          closeButton={false}
          position="top-right"
          toastOptions={{ style: { fontFamily: 'AcerFoco', height: '40px', padding: '8px' } }}
        />
      </ConfigProvider>
      <ReactQueryDevtools buttonPosition="bottom-right" />
    </QueryClientProvider>
  )
}

export { App }
