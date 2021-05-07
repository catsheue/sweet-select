import React, { useState } from "react";
import ChildMenuItem from "./ChildMenuItem";
import styled from "styled-components";

const ChildWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e0e0e0;
`;
const MenuName = styled.div`
  display: flex;
`;

const CollapseIcon = styled.div`
  width: 2rem;
  height: 2rem;

  line-height: 2rem;
  text-align: center;
  background: pink;
  font-size: 1rem;
  font-weight: bold;
`;

const MenuNameCheckLabel = styled.label`
  margin-left: 0;
  display: inline-flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  vertical-align: middle;
  padding: 0.125rem 0.3rem;
  min-height: 32px;
  cursor: pointer;
`;

const ChildMenuDropdown = styled.div`
  transition: all 1s;
  display: ${(props) => (props.isCollapse ? "block" : "none")};
`;

export default function ChildMenu({
  item,
  hasAllSub,
  hasSub,
  handleSelectSub,
  selectChildMenu,
}) {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <ChildWrapper>
      <MenuName>
        <CollapseIcon onClick={() => setIsCollapse((prevState) => !prevState)}>
          {isCollapse ? " - " : " + "}
        </CollapseIcon>
        <MenuNameCheckLabel>
          <input
            type="checkbox"
            checked={!!hasAllSub(item)}
            onChange={() => selectChildMenu(item)}
          />
          <span className="text">{item.Name}</span>
        </MenuNameCheckLabel>
      </MenuName>
      <ChildMenuDropdown isCollapse={isCollapse}>
        {item.Subsidiaries &&
          item.Subsidiaries.map((subsidiary, index) => (
            <ChildMenuItem
              key={index}
              subsidiary={subsidiary}
              name={subsidiary.OperatorId}
              parent={item.Name}
              hasSub={hasSub}
              handleSelectSub={handleSelectSub}
            />
          ))}
      </ChildMenuDropdown>
    </ChildWrapper>
  );
}
