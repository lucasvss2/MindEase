import { useMemo } from 'react'

import type { TabsProps } from 'antd'

import * as S from './styles'

type TitleTabProps = {
  title?: string
} & TabsProps

export const TitleTabs = ({ title, ...rest }: TitleTabProps) => {
  const items: TabsProps['items'] = useMemo(() => {
    if (title) {
      return [
        {
          key: title,
          label: title,
        },
      ]
    }
  }, [title])

  return <S.StyledTabs items={items} moreIcon={false} {...rest} />
}
