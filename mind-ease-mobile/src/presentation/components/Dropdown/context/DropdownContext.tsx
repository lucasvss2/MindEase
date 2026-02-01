import React, { createContext, useContext } from "react";

interface DropdownContextValue {
  close: () => void;
  closeOnItemPress: boolean;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

export function DropdownProvider({
  children,
  close,
  closeOnItemPress,
}: {
  children: React.ReactNode;
  close: () => void;
  closeOnItemPress: boolean;
}) {
  return (
    <DropdownContext.Provider value={{ close, closeOnItemPress }}>
      {children}
    </DropdownContext.Provider>
  );
}

export function useDropdownContext(): DropdownContextValue {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("useDropdownContext must be used within Dropdown component");
  }
  return context;
}
