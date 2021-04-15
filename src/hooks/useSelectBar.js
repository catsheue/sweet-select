import { useCallback, useRef, useState } from 'react';
import { useClickOutside } from './useClickOutside';

export function useSelectBar({ inputVal = '' }) {
  const [searchInput, setSearchInput] = useState(inputVal);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClearValue = (e) => {
    e.stopPropagation();
    setSearchInput('');
    // clearCallback();
  //  , clearCallback = () => {}
  };
  // const wrapper = useRef(null);

  // const closeCallback = useCallback(() => setIsDropdownOpen(false), []);
  // useClickOutside(wrapper, closeCallback);

  return {
    searchInput,
    setSearchInput,
    isDropdownOpen,
    setIsDropdownOpen,
    handleClearValue,
    // wrapper,
  };
}
