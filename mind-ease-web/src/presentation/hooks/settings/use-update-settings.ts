import { useMutation, useQueryClient } from '@tanstack/react-query'
import { makeRemoteSaveSettings } from '@/main/factories'
import { SaveSettings } from '@/domain/usecases'
import { showToast } from '@/presentation'

export const useUpdateSettings = () => {
  const queryClient = useQueryClient()
  const saveSettings = makeRemoteSaveSettings()

  return useMutation({
    mutationFn: async (params: SaveSettings.Params) => {
      return saveSettings.save(params)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['settings'] })
      showToast({
        type: 'success',
        message: 'Sucesso',
        description: 'Configurações atualizadas com sucesso.',
      })
    },
    onError: (err: any) => {
      console.error('Error updating settings', err)
      const errorMessage =
        err?.response?.data?.error || 'Erro ao atualizar configurações. Tente novamente.'

      showToast({
        type: 'error',
        message: 'Erro',
        description: errorMessage,
      })
    },
  })
}
