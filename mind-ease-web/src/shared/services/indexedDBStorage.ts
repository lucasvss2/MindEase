// Implementação de storage baseado em IndexedDB para uso com Zustand
export const createIndexedDBStorage = () => {
  const DB_NAME = 'appStorage'
  const STORE_NAME = 'themeStore'
  const DB_VERSION = 1

  // Inicializa o banco de dados
  const dbPromise =
    typeof window !== 'undefined'
      ? new Promise<IDBDatabase>((resolve, reject) => {
          const request = indexedDB.open(DB_NAME, DB_VERSION)

          request.onerror = () => reject(request.error)
          request.onsuccess = () => resolve(request.result)

          request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result
            if (!db.objectStoreNames.contains(STORE_NAME)) {
              db.createObjectStore(STORE_NAME)
            }
          }
        })
      : Promise.resolve(null)

  // Implementação da interface de storage
  return {
    getItem: async (name: string): Promise<string | null> => {
      if (typeof window === 'undefined') return null
      try {
        const db = await dbPromise
        if (!db) return null

        return new Promise<string | null>((resolve, reject) => {
          const transaction = db.transaction(STORE_NAME, 'readonly')
          const store = transaction.objectStore(STORE_NAME)
          const request = store.get(name)

          request.onerror = () => reject(request.error)
          request.onsuccess = () => resolve(request.result || null)
        })
      } catch (error) {
        console.error('Error reading from IndexedDB:', error)
        return null
      }
    },

    setItem: async (name: string, value: string): Promise<void> => {
      if (typeof window === 'undefined') return
      try {
        const db = await dbPromise
        if (!db) return

        return new Promise<void>((resolve, reject) => {
          const transaction = db.transaction(STORE_NAME, 'readwrite')
          const store = transaction.objectStore(STORE_NAME)
          const request = store.put(value, name)

          request.onerror = () => reject(request.error)
          request.onsuccess = () => resolve()
        })
      } catch (error) {
        console.error('Error writing to IndexedDB:', error)
      }
    },

    removeItem: async (name: string): Promise<void> => {
      if (typeof window === 'undefined') return
      try {
        const db = await dbPromise
        if (!db) return

        return new Promise<void>((resolve, reject) => {
          const transaction = db.transaction(STORE_NAME, 'readwrite')
          const store = transaction.objectStore(STORE_NAME)
          const request = store.delete(name)

          request.onerror = () => reject(request.error)
          request.onsuccess = () => resolve()
        })
      } catch (error) {
        console.error('Error removing from IndexedDB:', error)
      }
    },
  }
}
