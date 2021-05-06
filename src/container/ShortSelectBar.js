import React from "react";
import styled from "styled-components";

const ShortInputBlock = styled.div`
  width: 100%;
  padding: 0.5rem 0.7rem;
  font-size: 0.8rem;
  border: 1px solid darkgray;
`;

export default function ShortSelectBar({
  isDropdownOpen,
  setIsDropdownOpen,
  wrapper,
  list,
  selectedItem,
  setSelectedItem,
}) {
  return (
    <div className="wrapper" ref={wrapper}>
      <ShortInputBlock onClick={() => setIsDropdownOpen((prev) => !prev)}>
        {selectedItem ?? "Please select"}
      </ShortInputBlock>
      {isDropdownOpen && (
        <div className="dropdown">
          {list.map(({ name }, index) => {
            return (
              <div
                key={index}
                className="list-item"
                onClick={(e) => {
                  setSelectedItem(name);
                  setIsDropdownOpen(false);
                  e.stopPropagation();
                }}
              >
                {name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
