import React from "react";
import styled from "styled-components";

const ChildMenuItemWrapper = styled.div`
  border-top: 1px solid #e0e0e0;
  line-height: 2rem;
  height: 2rem;
  padding-left: 1rem;
`;

export default function ChildMenuItem({
  name,
  handleSelectSub,
  parent,
  hasSub,
  subsidiary,
}) {
  return (
    <ChildMenuItemWrapper>
      <input
        type="checkbox"
        checked={!!hasSub({ name, parent })}
        onChange={() => handleSelectSub(subsidiary, parent)}
      />
      {name}
    </ChildMenuItemWrapper>
  );
}
