import { CreateColumnDTO, UpdateColumnDTO } from "@/data/dtos/column-dto";
import { ColumnServices } from "@/data/repositories/columnServices";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const columnService = new ColumnServices();

export const useGetColumns = () => {
  return useQuery({
    queryKey: ["columns"],
    queryFn: () => columnService.getColumns(),
  });
};

export const useGetColumnsByBoardId = (boardId: string) => {
  return useQuery({
    queryKey: ["columns", boardId],
    queryFn: () => columnService.getColumnsByBoardId(boardId),
    enabled: !!boardId,
  });
};

export const useGetColumnById = (id: string) => {
  return useQuery({
    queryKey: ["columns", id],
    queryFn: () => columnService.getColumnById(id),
    enabled: !!id,
  });
};

export const useGetColumnBySlug = (slug: string) => {
  return useQuery({
    queryKey: ["columns", slug],
    queryFn: () => columnService.getColumnBySlug(slug),
    enabled: !!slug,
  });
};

export const useCreateColumnMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data }: { data: CreateColumnDTO }) =>
      columnService.createColumn(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["columns"] });
    },
  });
};

export const useUpdateColumnMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateColumnDTO }) =>
      columnService.updateColumn(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["columns"] });
    },
  });
};

export const useDeleteColumnMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => columnService.deleteColumn(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["columns"] });
    },
  });
};

