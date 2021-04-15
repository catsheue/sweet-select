import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelectBar} from "../hooks/useSelectBar";

const InputStyle = styled.input`
  width: 100%;
  padding: 0.5rem;
  //background: lightgray;
  &::placeholder {
    color: lightgray;
  }
  //border-bottom: 1px solid #ccc;
`;
const ClearValue = styled.span`
  color: #c4c4c4;
  position: absolute;
  right: 0.5rem;
  top: 0.4rem;
  font-family: Consolas, serif;
  font-size: 0.8rem;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;
const Wrapper = styled.div`
  width: 15rem;
  position: relative;
`;
const DropdownBox = styled.div`
  top: 2.4rem;
  position: absolute;
  background: #fff;
  color: #282c34;
  width: 100%;
  overflow-y: scroll;
  height: 13rem;
  z-index: 1;
  //border: 1px solid #9e9e9e;
  box-shadow: 1px 1px 4px 0px grey;
  border-radius: 5px;
`;
const ListItem = styled.div`
  padding: 0.5rem;
  font-size: 0.9rem;
  &:hover {
    background: dodgerblue;
    color: #fff;
  }
`;


export function SelectOptions({

                                handleClearValue,
                                setIsDropdownOpen,
                                searchInput,
                                setSearchInput,
                                isDropdownOpen,
                                list = [],
                              }) {
  return (
    <Wrapper>
      <ClearValue
        onClick={(e) => {
          handleClearValue(e);
          setIsDropdownOpen(true);
        }}
      >
        x
      </ClearValue>
      <InputStyle
        onClick={() => setIsDropdownOpen((prevState) => !prevState)}
        type="text"
        placeholder="All"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {isDropdownOpen && searchInput !== '' && (
        <DropdownBox>
          {list.map((name, index) => {
            const regex = new RegExp(searchInput, 'gi');
            if (regex.test(name)) {
              return (
                <ListItem
                  key={index}
                  onClick={(e) => {
                    setSearchInput(name);
                    setIsDropdownOpen(false);
                    e.stopPropagation();
                  }}
                >
                  {name}
                </ListItem>
              );
            }
            return null;
          })}
        </DropdownBox>
      )}
      {isDropdownOpen && searchInput === '' && (
        <DropdownBox>
          {list.map((name, index) => {
            const regex = new RegExp(searchInput, 'gi');
            if (regex.test(name)) {
              return (
                <ListItem
                  key={index}
                  onClick={(e) => {
                    setSearchInput(name);
                    setIsDropdownOpen(false);
                    e.stopPropagation();
                  }}
                >
                  {name}
                </ListItem>
              );
            }
            return null;
          })}
        </DropdownBox>
      )}
    </Wrapper>
  );
}

SelectOptions.propTypes = {
  wrapper: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
  handleClearValue: PropTypes.func.isRequired,
  setIsDropdownOpen: PropTypes.func.isRequired,
  setSearchInput: PropTypes.func.isRequired,
  isDropdownOpen: PropTypes.bool.isRequired,
  searchInput: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
