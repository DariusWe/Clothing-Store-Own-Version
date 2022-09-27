import { Container, FilterItemContainer } from "./filter-item.styles";
import { useState, useRef, useEffect } from "react";
import DropDownMenu from "./dropdown";

/*
The FilterItem component is designed to be reused for different use cases. It takes a filter object as an argument, which consists
of a label, the listType (radio, checkbox, ...), the menu entries, the currently active menu entries and a function to set the store 
value. The component renders the label of the filter and - once the user clicks the label - a dropdown menu with all the entries.
*/
// Notes to useRef: The useRef Hook is useful to reference DOM objects and is used here to detect clicks outside of this component.
// The useRef Hook only works with DOM objects. To reference DOM objects in a child component, use forwardRef.
// The useRef Hook will not rerender the component when it changes.

const FilterItem = ({ filter }) => {
  console.log("Rerendering FilterItem");
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const { label, listType, entries, currStoreValue, setStoreValue } = filter;
  const dropdownRef = useRef();

  //////////// Following code block is an outside-click-handler. If user clicks outside of this component, close the dropdown.
  useEffect(() => {
    dropdownIsOpen && document.addEventListener("mousedown", checkClickLocation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dropdownIsOpen]);

  const checkClickLocation = (e) => {
    if (!dropdownRef.current.contains(e.target)) {
      document.removeEventListener("mousedown", checkClickLocation);
      toggleDropdown();
    }
  };

  const toggleDropdown = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };
  ////////////

  return (
    <Container ref={dropdownRef}>
      <FilterItemContainer onClick={toggleDropdown}>
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
