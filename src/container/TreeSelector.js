import React, { useState } from "react";
import styled from "styled-components";

const SelectWrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
`;

const TopTextBlock = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  padding: 0 1rem 0 0;

  align-items: center;
`;

const TopText = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 0.3rem;
  padding: 0 1rem;
`;
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
const Triangle = styled.div`
  transform: ${(props) => (props.isDropdownOpen ? "rotate(180deg)" : "none")};
  transition: all 0.2s;

  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 7px solid #1c3d5f;
`;
export default function TreeSelector({
  isDropdownOpen,
  setIsDropdownOpen,
  wrapper,
}) {
  return (
    <SelectWrapper ref={wrapper}>
      <TopTextBlock onClick={() => setIsDropdownOpen((prev) => !prev)}>
        <TopText>texdddddddddddddddddddddddddddddddddddt</TopText>

        <Triangle isDropdownOpen={isDropdownOpen} />
      </TopTextBlock>
      {isDropdownOpen && (
        <DropDown className="dropdown">
          <div></div>
        </DropDown>
      )}
    </SelectWrapper>
  );
}
