import { PageLayout } from '@/layouts'
import { CustomizableDiaglog, ResponsiveButton, useTheme, useFont } from '@/presentation'
import { PlusOutlined } from '@ant-design/icons'
import { useState } from 'react'

export function LandingPage() {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const { changeTheme } = useTheme()
  const { changeFont } = useFont()

  return (
    <PageLayout>
      <CustomizableDiaglog
        open={open2}
        onCancel={() => setOpen2(false)}
        onOk={() => setOpen2(false)}
        $type="default"
        title="Teste"
        children="Teste"
        cancelButtonText="Cancelar"
        okButtonText="Salvar"
      />
      <CustomizableDiaglog
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => setOpen(false)}
        $type="danger"
        title="Teste"
        children="Teste"
        cancelButtonText="Cancelar"
        okButtonText="Salvar"
      />
      <section>
        <h1>MindEase</h1>
        <p>MindEase is a mental health platform that provides resources and support for people who are struggling with mental health issues.</p>
        <ResponsiveButton
          width="215px"
          height="56px"
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setOpen(!open)}
        >
          teste
        </ResponsiveButton>
        <ResponsiveButton
          width="215px"
          height="56px"
          type="dashed"
          icon={<PlusOutlined />}
          onClick={() => setOpen2(!open2)}
        >
          teste
        </ResponsiveButton>
        <ResponsiveButton
          width="215px"
          height="56px"
          type="text"
          icon={<PlusOutlined />}
        >
          teste
        </ResponsiveButton>
        <ResponsiveButton
          width="215px"
          height="56px"
          type="link"
          icon={<PlusOutlined />}
          onClick={() => changeTheme('light')}
        >
          normal
        </ResponsiveButton>
        <ResponsiveButton
          width="215px"
          height="56px"
          type="default"
          icon={<PlusOutlined />}
          onClick={() => changeTheme('light-high-contrast')}
        >
          high
        </ResponsiveButton>
        <ResponsiveButton
          width="215px"
          height="56px"
          type="neutral"
          icon={<PlusOutlined />}
          onClick={() => changeTheme('light-low-contrast')}
        >
          low
        </ResponsiveButton>
        <ResponsiveButton
          width="215px"
          height="56px"
          type="link"
          icon={<PlusOutlined />}
          onClick={() => changeFont('lexend')}
        >
          Lexend
        </ResponsiveButton>
        <ResponsiveButton
          width="215px"
          height="56px"
          type="default"
          icon={<PlusOutlined />}
          onClick={() => changeFont('jetbrains-mono')}
        >
          JetBrains Mono
        </ResponsiveButton>
        <ResponsiveButton
          width="215px"
          height="56px"
          type="neutral"
          icon={<PlusOutlined />}
          onClick={() => changeFont('bitter')}
        >
          Bitter
        </ResponsiveButton>
      </section>
    </PageLayout>
  )
}
