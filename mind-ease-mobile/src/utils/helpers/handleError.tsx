import { AppError } from "@/domain/errors/app-error";

function handleError(error: unknown, toast: (message: string) => void) {
  if (error instanceof AppError) {
    toast(error.message);
  } else {
    toast("Ocorreu um erro desconhecido. Por favor, tente novamente.");
  }
}

export default handleError;

