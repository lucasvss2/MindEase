import { PageLayout } from "@/layouts"
import * as S from "./styles"
import { Form, Divider } from "antd"
import {
  ResponsiveButton,
  ResponsiveInput,
  ResponsiveCard
} from "@/presentation"

export function LoginPage() {
  return (
    <PageLayout
      title="Login"
      hideFloatButton
    >
      <S.Container>
        <ResponsiveCard $width="400px" $gap="16px">
          <S.Title>Login</S.Title>
          <Form>
            <Form.Item>
              <ResponsiveInput placeholder="Digite seu email" />
            </Form.Item>
            <Form.Item>
              <ResponsiveInput type={'password'} placeholder="Digite sua senha" hidden />
            </Form.Item>
            <Divider />
            <ResponsiveButton width="100%" type="default" htmlType="submit">Login</ResponsiveButton>
          </Form>
        </ResponsiveCard>
      </S.Container>
    </PageLayout>
  )
}
