import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

export function useCognitiveAlert(thresholdMinutes: number) {
  const location = useLocation()
  const navigate = useNavigate()
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const key = `cognitive-alert-shown-${location.pathname}`
    if (sessionStorage.getItem(key)) return

    timerRef.current = setTimeout(
      () => {
        if (sessionStorage.getItem(key)) return
        sessionStorage.setItem(key, '1')
        toast.warning('Você está nesta área há bastante tempo 🧠', {
          description: 'Que tal fazer uma pausa para descansar?',
          action: {
            label: 'Iniciar Pausa',
            onClick: () => navigate('/focus'),
          },
          duration: 10000,
        })
      },
      thresholdMinutes * 60 * 1000,
    )

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [location.pathname, thresholdMinutes, navigate])
}
