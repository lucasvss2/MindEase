import * as SecureStore from "expo-secure-store";
import {
  createJSONStorage,
  devtools,
  persist,
  StateStorage,
} from "zustand/middleware";
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

type States = {
  email?: string | undefined | null;
  token?: string | undefined | null;
  refreshToken?: string | undefined | null;
};

interface Actions {
  setEmail: (email: string |  undefined | null) => void;
  setToken: (token: string |  undefined | null) => void;
  setRefreshToken: (refreshToken: string |  undefined | null) => void;
  reset: () => void;
}

const INITIAL_STATE: States = {
  email: undefined,
  token: undefined,
  refreshToken: undefined,
};

const secureStorage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return (await SecureStore.getItemAsync(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await SecureStore.setItemAsync(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await SecureStore.deleteItemAsync(name);
  },
};

const useAuthStore = createWithEqualityFn<States & Actions>()(
  devtools(
    persist(
      (set) => ({
        ...INITIAL_STATE,
        setEmail: (email: string |  undefined | null) => set({ email }),
        setToken: (token: string |  undefined | null) => set({ token }),
        setRefreshToken: (refreshToken: string |  undefined | null) => set({ refreshToken }),
        reset: () => set(INITIAL_STATE),
      }),

      {
        name: "pb-auth-store",
        storage: createJSONStorage(() => secureStorage),
      },
    ),
    { name: "pb-auth-store" },
  ),
  shallow,
);

export default useAuthStore;

