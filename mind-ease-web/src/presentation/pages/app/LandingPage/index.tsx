import { PageLayout } from '@/layouts'
import { ResponsiveButton } from '@/presentation'
import { PlusOutlined } from '@ant-design/icons'

export function LandingPage() {
  return (
    <PageLayout>
      <section>
        <h1>MindEase</h1>
        <p>MindEase is a mental health platform that provides resources and support for people who are struggling with mental health issues.</p>
        <ResponsiveButton
          width="215px"
          height="56px"
          type="primary"
          icon={<PlusOutlined />}
        >
          teste
        </ResponsiveButton>
      </section>
    </PageLayout>
  )
}
