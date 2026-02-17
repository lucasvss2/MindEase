import { PageLayout } from "@/layouts"
import * as S from "./styles"
import { Form } from "antd"
import {
  ResponsiveButton,
  ResponsiveInput,
  ResponsiveCard
} from "@/presentation"

export function RegisterPage() {
  return (
    <PageLayout
      title="Novo Usuário"
      hideFloatButton
    >
      <S.Container>
        <ResponsiveCard $width="400px">
          <Form>
            <Form.Item>
              <ResponsiveInput placeholder="Digite seu nome" />
            </Form.Item>
            <Form.Item>
              <ResponsiveInput placeholder="Digite seu email" />
            </Form.Item>
            <Form.Item>
              <ResponsiveInput placeholder="Digite sua senha" />
            </Form.Item>
            <Form.Item>
              <ResponsiveInput placeholder="Digite sua senha" />
            </Form.Item>
            <ResponsiveButton type="default" htmlType="submit">Criar Conta</ResponsiveButton>
          </Form>
        </ResponsiveCard>
      </S.Container>
    </PageLayout>
  )
}
