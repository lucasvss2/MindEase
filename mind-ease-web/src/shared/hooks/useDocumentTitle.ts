import { useLayoutEffect } from 'react'

export const useDocumentTitle = (pageTitle: string | undefined) => {
  const defaultTitle = 'Acer - Base de Conhecimento'

  const title = pageTitle ? `${pageTitle} | Acer - Base de Conhecimento` : defaultTitle

  useLayoutEffect(() => {
    document.title = `${title}`
  }, [title])
}
