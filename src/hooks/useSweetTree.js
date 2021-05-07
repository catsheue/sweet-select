import { useCallback, useEffect, useRef, useState } from "react";
import { useClickOutside } from "./useClickOutside";

export function useSweetTree({
  list,
  selectAllFunc = null,
  unSelectAllFunc = null,
  setWhiteLabelList = null,
  selectSubsidiary = null,
  selectWhiteLabel = null,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const wrapper = useRef(null);
  const closeCallback = useCallback(() => setIsDropdownOpen(false), []);
  useClickOutside(wrapper, closeCallback);

  const checkAllSelected = () => {
    if (!list) return false;
    const selected = JSON.parse(
      JSON.stringify(selectedItems.slice().sort((a, b) => a.ID - b.ID))
    );
    const origin = JSON.parse(
      JSON.stringify(list.slice().sort((a, b) => a.ID - b.ID))
    );
    if (selected.length !== origin.length) return false;
    return selected.every(
      (element, index) =>
        element.Subsidiaries.length === origin[index].Subsidiaries.length
    );
  };
  const toggleChildMenu = (item) => {
    // three ways
    // 1. O > O O O O  unSelect all
    // 2. O > - O - O  select all
    // 3. - > - - - -  select all

    // payload is this whiteLabel
    const arr = selectedItems.slice();
    const indexOfWhiteLabel = arr.findIndex((ele) => ele.Name === item.Name);
    const targetObj = arr.find((ele) => ele.Name === item.Name);

    if (targetObj) {
      const newArr = JSON.parse(JSON.stringify(selectedItems));
      newArr[indexOfWhiteLabel] = item;
      targetObj.Subsidiaries.length === item.Subsidiaries.length
        ? setSelectedItems(arr.filter((item) => item.Name !== item.Name))
        : setSelectedItems(newArr);
      // 1. if has select all and child, remove this whiteLabel
      // 2. false, add all in this whiteLabel (from this index)
    } else {
      // 3. didnt select this white label yet, all in
      setSelectedItems((prev) => [...prev, item]);
    }
  };
  const selectChildMenu = (item) => {
    selectWhiteLabel ? selectWhiteLabel(item) : toggleChildMenu(item);
  };
  const handleSelectAll = () => {
    selectAllFunc ? selectAllFunc() : setSelectedItems(list);
  };
  const handleUnSelectAll = () => {
    unSelectAllFunc ? unSelectAllFunc() : setSelectedItems([]);
  };
  const toggleSelectAll = () => {
    checkAllSelected() ? handleUnSelectAll() : handleSelectAll();
  };
  const hasAllSub = (item) => {
    const ind = selectedItems.findIndex((ele) => ele.Name === item.Name);
    const originInd = list.findIndex((ele) => ele.Name === item.Name);
    if (ind !== -1) {
      return (
        selectedItems[ind].Subsidiaries.length ===
        list[originInd].Subsidiaries.length
      );
    }
    return false;
  };
  const handleSetList = (newList) => {
    setWhiteLabelList ? setWhiteLabelList(newList) : setSelectedItems(newList);
  };
  const handleSelectSub = (subsidiary, parent) => {
    // sub is this subsidiary item (object)
    // parent is name
    const parentIndex = selectedItems.findIndex((ele) => ele.Name === parent);
    // get target parent object
    if (parentIndex !== -1) {
      const obj = selectedItems.find((ele) => ele.Name === parent);
      const newObj = JSON.parse(JSON.stringify(obj));
      if (
        newObj.Subsidiaries.find((e) => e.OperatorId === subsidiary.OperatorId)
      ) {
        // unselect this sub
        newObj["Subsidiaries"] = newObj.Subsidiaries.filter(
          (el) => el.OperatorId !== subsidiary.OperatorId
        );

        if (newObj.Subsidiaries.length === 0) {
          const newList = selectedItems.filter((ele) => ele.Name !== parent);
          handleSetList(newList);
          return;
        }
        const newSelectedList = selectedItems.slice();
        newSelectedList[parentIndex] = newObj;
        handleSetList(newSelectedList);
      } else {
        // add this sub
        const newSelectedList = selectedItems.slice();
        const arr = newObj["Subsidiaries"].slice();
        newObj["Subsidiaries"] = arr.concat(subsidiary);
        newSelectedList[parentIndex] = newObj;
        handleSetList(newSelectedList);
      }
    } else {
      // didn't select parent yet
      const obj = list.find((ele) => ele.Name === parent);
      const newObj = JSON.parse(JSON.stringify(obj));
      newObj["Subsidiaries"] = [{ ...subsidiary }];
      if (selectSubsidiary) {
        selectSubsidiary(newObj);
      } else {
        setSelectedItems((prevState) => [...prevState, newObj]);
      }
    }
  };
  const hasSub = ({ parent, name }) => {
    const ind = selectedItems.findIndex((ele) => ele.Name === parent);
    if (ind !== -1) {
      return selectedItems[ind].Subsidiaries.find(
        (sub) => sub.OperatorId === name
      );
    }
    return false;
  };
  return {
    isDropdownOpen,
    setIsDropdownOpen,
    wrapper,
    selectedItems,
    setSelectedItems,
    checkAllSelected,
    toggleSelectAll,
    list,
    hasAllSub,
    handleSelectSub,
    hasSub,
    selectChildMenu,
  };
}
