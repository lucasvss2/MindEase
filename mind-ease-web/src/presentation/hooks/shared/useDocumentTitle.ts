import { useLayoutEffect } from 'react'

export const useDocumentTitle = (pageTitle: string | undefined) => {
  const defaultTitle = 'MindEase'

  const title = pageTitle ? `${pageTitle} | MindEase` : defaultTitle

  useLayoutEffect(() => {
    document.title = `${title}`
  }, [title])
}
