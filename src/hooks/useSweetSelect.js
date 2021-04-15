import {useState } from 'react';

export function useSweetSelect() {
  const [searchInput, setSearchInput] = useState('');
  const handleChangeSearchInput = (value) => {
    setSearchInput(value);
  }
  return {
    searchInput, handleChangeSearchInput
  }
}
