import { useState, useCallback } from "react";

interface UseDropdownStateOptions {
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

interface UseDropdownStateReturn {
  isOpen: boolean;
  isControlled: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export function useDropdownState({
  isOpen: controlledIsOpen,
  onOpenChange,
}: UseDropdownStateOptions): UseDropdownStateReturn {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const open = useCallback(() => {
    if (isControlled) {
      onOpenChange?.(true);
    } else {
      setInternalIsOpen(true);
    }
  }, [isControlled, onOpenChange]);

  const close = useCallback(() => {
    if (isControlled) {
      onOpenChange?.(false);
    } else {
      setInternalIsOpen(false);
    }
  }, [isControlled, onOpenChange]);

  const toggle = useCallback(() => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  }, [isOpen, open, close]);

  return {
    isOpen,
    isControlled,
    open,
    close,
    toggle,
  };
}
