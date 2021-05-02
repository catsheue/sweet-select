import { useCallback, useRef, useState } from "react";
import { useClickOutside } from "./useClickOutside";

export function useSweetTree() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const wrapper = useRef(null);
  const closeCallback = useCallback(() => setIsDropdownOpen(false), []);
  useClickOutside(wrapper, closeCallback);
  return {
    isDropdownOpen,
    setIsDropdownOpen,
    wrapper,
  };
}
