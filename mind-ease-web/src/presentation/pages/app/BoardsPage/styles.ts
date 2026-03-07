import { styled } from '@linaria/react'

export const Container = styled.div``

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`
export const Title = styled.span`
  font-size: 24px;
  color: var(--color-text);
`

export const Subtitle = styled.span`
  font-size: 20px;
  color: var(--color-text);
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

export const EmptyText = styled.span`
  color: var(--color-subtext, #999);
  font-size: 14px;
`
