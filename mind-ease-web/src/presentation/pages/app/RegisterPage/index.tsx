import { PageLayout } from "@/layouts"
import * as S from "./styles"
import { Divider, Form } from "antd"
import {
  ResponsiveButton,
  ResponsiveInput,
  ResponsiveCard
} from "@/presentation"
import { useLocation } from "react-router-dom"

export function RegisterPage() {
  const location = useLocation()
  const email = location.state?.email

  return (
    <PageLayout
      title="Novo Usuário"
      hideFloatButton
    >
      <S.Container>
        <ResponsiveCard $width="400px" $gap="16px">
          <S.Title>Crie sua conta MindEase</S.Title>
          <S.Subtitle>Preencha seus dados pessoais</S.Subtitle>
          <Form>
            <Form.Item>
              <ResponsiveInput placeholder="Digite seu nome" />
            </Form.Item>
            <Form.Item>
              <ResponsiveInput placeholder="Digite seu email" defaultValue={email ? email : ""} />
            </Form.Item>
            <Form.Item>
              <ResponsiveInput placeholder="Digite sua senha" />
            </Form.Item>
            <Form.Item>
              <ResponsiveInput placeholder="Digite sua senha" />
            </Form.Item>
            <Divider />
            <ResponsiveButton width="100%" type="default" htmlType="submit">Criar Conta</ResponsiveButton>
          </Form>
        </ResponsiveCard>
      </S.Container>
    </PageLayout>
  )
}
