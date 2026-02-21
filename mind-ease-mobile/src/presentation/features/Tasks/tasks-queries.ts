import { CreateTaskDTO, UpdateTaskDTO } from "@/data/dtos/task-dto";
import { TaskServices } from "@/data/repositories/taskServices";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const taskServices = new TaskServices();

export const useGetTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: () => taskServices.getTasks(),
  });
};

export const useGetTaskById = (id: string) => {
  return useQuery({
    queryKey: ["tasks", id],
    queryFn: () => taskServices.getTaskById(id),
    enabled: true,
  });
};

export const useCreateTaskMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ data }: { data: CreateTaskDTO }) =>
      taskServices.createTask(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

export const useUpdateTaskMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateTaskDTO }) =>
      taskServices.updateTask(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

export const useDeleteTaskMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => taskServices.deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

