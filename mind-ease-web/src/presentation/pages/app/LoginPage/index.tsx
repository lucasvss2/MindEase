import * as S from "./styles"
import { Form, Divider } from "antd"
import {
  ResponsiveButton,
  ResponsiveInput,
  ResponsiveCard,
  PageLayout
} from "@/presentation"
import { useLogin } from "@/presentation/hooks/auth"
import { Authentication } from "@/domain/usecases"

export function LoginPage() {
  const [form] = Form.useForm<Authentication.Params>()
  const { mutate: login, isPending } = useLogin()

  const handleLogin = (values: Authentication.Params) => {
    login(values)
  }

  return (
    <PageLayout
      title="Login"
      hideFloatButton
    >
      <S.Container>
        <ResponsiveCard $width="400px" $gap="16px">
          <S.Title>Login</S.Title>
          <S.Subtitle>Acesse sua conta MindEase</S.Subtitle>
          <Form
            form={form}
            onFinish={handleLogin}
            layout="vertical"
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Insira seu email' }, { type: 'email', message: 'Email inválido' }]}
            >
              <ResponsiveInput placeholder="Digite seu email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Insira sua senha' }]}
            >
              <ResponsiveInput type={'password'} placeholder="Digite sua senha" hidden />
            </Form.Item>
            <Divider />
            <ResponsiveButton width="100%" type="default" htmlType="submit" loading={isPending}>
              Login
            </ResponsiveButton>
          </Form>
        </ResponsiveCard>
      </S.Container>
    </PageLayout>
  )
}
