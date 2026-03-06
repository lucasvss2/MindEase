import { secureStorage } from "@/utils/helpers/secureStorage";
import { createJSONStorage, persist } from "zustand/middleware";
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

interface States {
  selectionsByBoard: Record<string, Record<string, boolean>>;
}

interface Actions {
  toggleColumn: (boardId: string, columnId: string) => void;
  resetColumnStore: () => void;
}

export const useColumnStore = createWithEqualityFn<States & Actions>()(
  persist(
    (set) => ({
      selectionsByBoard: {},

      toggleColumn: (boardId, columnId) =>
        set((state) => {
          const currentBoardSelections = state.selectionsByBoard[boardId] || {};
          return {
            selectionsByBoard: {
              ...state.selectionsByBoard,
              [boardId]: {
                ...currentBoardSelections,
                [columnId]: !currentBoardSelections[columnId],
              },
            },
          };
        }),

      resetColumnStore: () => set({ selectionsByBoard: {} }),
    }),
    {
      name: "mind-ease-store",
      storage: createJSONStorage(() => secureStorage),
    },
  ),
  shallow,
);

