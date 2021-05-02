import React, { useState } from "react";
import styled from "styled-components";

const DropDown = styled.div`
  height: 12rem;
  position: absolute;
  top: 3rem;
  border: 1px solid darkgray;
  width: 100%;
  overflow-y: scroll;
  z-index: 1;
  background: #fff;
`;
const fakeDataList = [
  {
    name: "fruits",
    type: [{ name: "banana" }, { name: "strawberry" }],
  },
  {
    name: "coffee",
    type: [{ name: "Latte" }, { name: "Cappuccino" }],
  },
  {
    name: "coffee",
    type: [{ name: "Latte" }, { name: "Cappuccino" }, { name: "Mocha" }],
  },
  {
    name: "car",
    type: [],
  },
];
export default function TreeSelector({
  isDropdownOpen,
  setIsDropdownOpen,
  wrapper,
}) {
  return (
    <div className="wrapper" ref={wrapper}>
      <div
        className="top-input"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        select...
      </div>
      {isDropdownOpen && (
        <DropDown className="dropdown">
          <div></div>
        </DropDown>
      )}
    </div>
  );
}
