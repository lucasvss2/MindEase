import { CreateBoardDTO, UpdateBoardDTO } from "@/data/dtos/board-dto";
import { BoardServices } from "@/data/repositories/boardServices";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const boardService = new BoardServices();

export const useGetBoards = () => {
  return useQuery({
    queryKey: ["boards"],
    queryFn: () => boardService.getBoards(),
  });
};

export const useGetBoardById = (id: string) => {
  return useQuery({
    queryKey: ["boards", id],
    queryFn: () => boardService.getBoardById(id),
    enabled: !!id,
  });
};

export const useCreateBoardMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data }: { data: CreateBoardDTO }) => boardService.createBoard( data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["boards"] });
    },
  });
};

export const useUpdateBoardMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateBoardDTO }) =>
      boardService.updateBoard(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["boards"] });
    },
  });
};

export const useDeleteBoardMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => boardService.deleteBoard(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["boards"] });
    },
  });
};

