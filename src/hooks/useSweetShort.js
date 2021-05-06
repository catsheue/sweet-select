import { useCallback, useRef, useState } from "react";
import { useClickOutside } from "./useClickOutside";

export function useSweetShort() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const wrapper = useRef(null);
  const closeCallback = useCallback(() => setIsDropdownOpen(false), []);
  useClickOutside(wrapper, closeCallback);

  return {
    isDropdownOpen,
    setIsDropdownOpen,
    wrapper,
    selectedItem,
    setSelectedItem,
  };
}
