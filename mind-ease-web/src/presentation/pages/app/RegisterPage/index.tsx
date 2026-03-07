import * as S from "./styles"
import { Divider, Form } from "antd"
import {
  ResponsiveButton,
  ResponsiveInput,
  ResponsiveCard,
  PageLayout
} from "@/presentation"
import { useLocation } from "react-router-dom"
import { useRegister } from "@/presentation/hooks/auth"
import { AddAccount } from "@/domain/usecases"

export function RegisterPage() {
  const location = useLocation()
  const email = location.state?.email
  const [form] = Form.useForm<AddAccount.Params>()
  const { mutate: register, isPending } = useRegister()

  const handleCreateUser = (values: AddAccount.Params) => {
    register({
      name: values.name,
      email: values.email,
      password: values.password,
    })
  }

  return (
    <PageLayout
      title="Novo Usuário"
      hideFloatButton
    >
      <S.Container>
        <ResponsiveCard $width="400px" $gap="16px">
          <S.Title>Crie sua conta MindEase</S.Title>
          <S.Subtitle>Preencha seus dados pessoais</S.Subtitle>
          <Form
            form={form}
            onFinish={handleCreateUser}
            layout="vertical"
            initialValues={{ email: email || "" }}
          >
            <Form.Item
              name="name"
              rules={[
                { required: true, message: 'Insira seu nome' },
                { min: 2, message: 'Nome deve ter no mínimo 2 caracteres' }
              ]}
            >
              <ResponsiveInput placeholder="Digite seu nome" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Insira seu email' },
                { type: 'email', message: 'Email inválido' }
              ]}
            >
              <ResponsiveInput placeholder="Digite seu email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Insira sua senha' },
                { min: 6, message: 'A senha deve ter no mínimo 6 caracteres' }
              ]}
            >
              <ResponsiveInput type="password" placeholder="Digite sua senha" />
            </Form.Item>
            <Form.Item
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Confirme sua senha' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('As senhas não coincidem'));
                  },
                }),
              ]}
            >
              <ResponsiveInput type="password" placeholder="Confirme sua senha" />
            </Form.Item>
            <Divider />
            <ResponsiveButton width="100%" type="default" htmlType="submit" loading={isPending}>
              Criar Conta
            </ResponsiveButton>
          </Form>
        </ResponsiveCard>
      </S.Container>
    </PageLayout>
  )
}
