import { styled } from '@linaria/react'

export const Card = styled.div`
  background-color: var(--color-cardBG);
  border: 1px solid var(--color-cardBorder, #e8e8e8);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  box-shadow: var(--box-shadow-sm);
  transition:
    box-shadow 0.2s ease,
    transform 0.15s ease;
  position: relative;

  &:hover {
    box-shadow: var(--box-shadow-md, 0 4px 16px rgba(0, 0, 0, 0.12));
    transform: translateY(-2px);
  }
`

export const TopRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

interface ColorDotProps {
  $color: string
}

export const ColorDot = styled.span<ColorDotProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};
  flex-shrink: 0;
  display: block;
`

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 6px;
  border-radius: 6px;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.15s;

  &:hover {
    background-color: var(--color-hover, rgba(0, 0, 0, 0.06));
  }
`

export const Name = styled.span`
  font-size: calc(16px + var(--font-size-offset));
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.3;
  word-break: break-word;
`

export const Description = styled.p`
  font-size: calc(13px + var(--font-size-offset));
  color: var(--color-subtext, #777);
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
`
