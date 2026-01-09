import { ConfigProvider } from 'antd'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'sonner'
import ptBR from 'antd/es/locale/pt_BR'

import { Routes } from './routes'
import { antdTheme, darkAntdTheme, queryClient, useThemeStore, ThemeProvider } from '@/shared'

const App: React.FC = () => {
  const { theme } = useThemeStore()
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider theme={theme === 'light' ? antdTheme : darkAntdTheme} locale={ptBR}>
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
    </ThemeProvider>
  )
}

export { App }
