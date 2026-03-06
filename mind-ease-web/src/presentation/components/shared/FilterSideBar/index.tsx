import { RightOutlined } from '@ant-design/icons'

import * as S from './styles'
import { ResponsiveButton } from '@/presentation'

type FilterSidebarProps = {
  filterFooter?: React.ReactNode
  isFiltersLoading?: boolean
  isFilterDrawerOpen: boolean
  onClose: () => void
  /** @deprecated no longer needed — panel is now inline */
  getContainer?: () => HTMLElement
}

export const FilterSidebar = ({
  filterFooter,
  isFiltersLoading,
  onClose,
  isFilterDrawerOpen,
}: FilterSidebarProps) => {
  return (
    <S.OuterWrapper $isOpen={isFilterDrawerOpen}>
      {!isFilterDrawerOpen &&
        (
          /* Floating pill button — visible when panel is CLOSED */
          <S.FloatingOpenButton
            onClick={onClose}
            disabled={isFiltersLoading}
            data-testid="filter-trigger-open"
            title="Abrir painel"
          >
            <RightOutlined />
          </S.FloatingOpenButton>
        )}

      {/* Inline expanding panel — no overlay, no mask */}
      <S.InlinePanelWrapper
        width={280}
        collapsible={false}
        collapsed={!isFilterDrawerOpen}
        collapsedWidth={0}
        trigger={null}
      >
        <S.PanelContent>
          <ResponsiveButton
            type="default"
            onClick={onClose}
          >
            <span style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              gap: '8px',
              width: '100%'
            }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.5 5.83333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H5.83333" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.1666 2.5H15.8333C16.2753 2.5 16.6992 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V5.83333" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.5 14.1667V15.8334C17.5 16.2754 17.3244 16.6993 17.0118 17.0119C16.6992 17.3244 16.2753 17.5 15.8333 17.5H14.1666" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.83333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0119C2.67559 16.6993 2.5 16.2754 2.5 15.8334V14.1667" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Modo Foco
              <div />
            </span>
          </ResponsiveButton>
          <ResponsiveButton
            type="link"
            onClick={onClose}
          >Modo Foco</ResponsiveButton>
          <ResponsiveButton
            type="link"
            onClick={onClose}
          >Modo Foco</ResponsiveButton>
        </S.PanelContent>

        {filterFooter && (
          <S.PanelFooter>
            {filterFooter}
          </S.PanelFooter>
        )}
      </S.InlinePanelWrapper>
    </S.OuterWrapper>
  )
}
