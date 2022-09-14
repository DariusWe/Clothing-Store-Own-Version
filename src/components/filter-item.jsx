import { Container, FilterItemContainer } from "./filter-item.styles";
import { useState } from "react";
import DropDownMenu from "./dropdown";

/*
The FilterItem component is designed to be reused for different use cases. It takes a filter object as an argument, which consists
of a label, the listType (radio, checkbox, ...), the menu entries, the currently active menu entries and a function to set the store 
value. The component renders the label of the filter and - once the user clicks the label - a dropdown menu with all the entries.
*/

const FilterItem = ({ filter }) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const { label, listType, entries, currStoreValue, setStoreValue } = filter;

  const openDropdown = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  return (
    <Container>
      <FilterItemContainer onClick={openDropdown}>
        {label}
        {dropdownIsOpen ? <i className="fa-solid fa-angle-up" /> : <i className="fa-solid fa-angle-down" />}
      </FilterItemContainer>
      {dropdownIsOpen ? (
        <DropDownMenu
          entriesArray={entries}
          listType={listType}
          currStoreValue={currStoreValue}
          setStoreValue={setStoreValue}
        />
      ) : null}
    </Container>
  );
};

export default FilterItem;
