import { useCallback, useRef, useState } from "react";
import { useClickOutside } from "./useClickOutside";

export function useSweetSelect() {
  const [searchInput, setSearchInput] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleClearValue = (e) => {
    e.stopPropagation();
    setSearchInput("");
  };

  const wrapper = useRef(null);
  const closeCallback = useCallback(() => setIsDropdownOpen(false), []);
  useClickOutside(wrapper, closeCallback);

  return {
    searchInput,
    setSearchInput,
    handleClearValue,
    isDropdownOpen,
    setIsDropdownOpen,
    wrapper,
  };
}
