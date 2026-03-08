import { styled } from '@linaria/react'

export const Container = styled.div`
  width: 100%;
  border: 1px solid var(--color-cardBorder, #e8e8e8);
  border-radius: 8px;
  overflow: hidden;
`

export const Header = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background: var(--color-buttonDefaultBG);
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: calc(var(--font-size-base) + var(--font-size-offset));

  &:hover {
    background: var(--color-buttonDefaultHoverBG);
  }
`

export const HeaderLabel = styled.span`
  font-size: 0.75em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: calc(0.06em + var(--letter-spacing-offset));
  color: var(--color-buttonDefaultText);
`

interface ChevronProps {
  $open: boolean
}

export const Chevron = styled.span<ChevronProps>`
  display: inline-flex;
  align-items: center;
  font-size: 10px;
  color: var(--color-buttonDefaultText);
  transition: transform 0.2s ease;
  transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0deg)')};
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 260px;
  overflow-y: auto;
  background: var(--color-bgColor);
`

interface ItemProps {
  $active: boolean
}

export const Item = styled.button<ItemProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 9px 12px;
  border: none;
  border-bottom: 1px solid var(--color-cardBorder, #e8e8e8);
  background: ${({ $active }) =>
    $active ? 'var(--color-buttonDefaultBG)' : 'var(--color-bgColor)'};
  cursor: pointer;
  font-family: inherit;
  font-size: calc(var(--font-size-base) + var(--font-size-offset));
  text-align: left;
  transition: background 0.15s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: var(--color-buttonDefaultHoverBG);
  }
`

interface ColorDotProps {
  $color: string
}

export const ColorDot = styled.span<ColorDotProps>`
  flex-shrink: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
`

export const BoardName = styled.span`
  font-size: 0.85em;
  color: var(--color-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
