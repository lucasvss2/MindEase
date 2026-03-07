import { styled } from '@linaria/react'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 4px;
`

export const TitleActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: auto;
`

interface ColorDotProps {
  $color: string
}

export const ColorDot = styled.span<ColorDotProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  flex-shrink: 0;
  display: block;
`

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
`

export const Description = styled.p`
  font-size: 14px;
  color: var(--color-subtext, #777);
  margin: 0;
  padding-left: 32px;
`
