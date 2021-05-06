import { useCallback, useEffect, useRef, useState } from "react";
import { useClickOutside } from "./useClickOutside";

export function useSweetTree() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selecteAll, setSelectedAll] = useState(false);
  const wrapper = useRef(null);
  const closeCallback = useCallback(() => setIsDropdownOpen(false), []);
  useClickOutside(wrapper, closeCallback);

  useEffect(() => {
    const listLength = 10;
    if (selectedItems.length === listLength) {
      setSelectedAll(true);
    } else {
      setSelectedAll(false);
    }
  }, [selectedItems]);
  return {
    isDropdownOpen,
    setIsDropdownOpen,
    wrapper,
    selectedItems,
    setSelectedItems,
    selecteAll,
    setSelectedAll,
  };
}
