import { useCallback } from "react";
import { Container, FilterItemContainer } from "./filter-item.styles";
import { useState, useRef, useEffect } from "react";
import { DropDownMenu } from "../../index";
import type { ProductFilter } from "../products-filter-section";
import { CSSTransition } from "react-transition-group";

/*
The FilterItem component is designed to be reused for different use cases. It takes a filter object as an argument, which consists
of a label, the listType (radio, checkbox, ...), the menu entries, the currently active menu entries and a function to set the store 
value. The component renders the label of the filter and - once the user clicks the label - a dropdown menu with all the entries.
*/

type FilterItemProps = {
  filter: ProductFilter;
};

const FilterItem = ({ filter }: FilterItemProps) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const { label, listType, entries, currStoreValue, setStoreValue } = filter;
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = useCallback(() => {
    // If not using useCallback, this function would be recreated on every render
    // This would lead to useEffect (see below) also beeing run on every render
    setDropdownIsOpen(!dropdownIsOpen);
  }, [dropdownIsOpen]);

  ////////////////////////////////////// Outside-click-handler //////////////////////////////////////

  useEffect(() => {
    const checkClickLocation = (e: MouseEvent) => {
      if (e.target instanceof Node) {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          document.removeEventListener("mousedown", checkClickLocation);
          toggleDropdown();
        }
      }
    };
    dropdownIsOpen && document.addEventListener("mousedown", checkClickLocation);
  }, [dropdownIsOpen, toggleDropdown]);

  /////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <Container ref={dropdownRef}>
      <FilterItemContainer onClick={toggleDropdown}>
        {label}
        {dropdownIsOpen ? <i className="fa-solid fa-angle-up" /> : <i className="fa-solid fa-angle-down" />}
      </FilterItemContainer>
      <CSSTransition in={dropdownIsOpen} unmountOnExit classNames="dropdown" timeout={50}>
        <DropDownMenu
          entries={entries}
          listType={listType}
          currStoreValue={currStoreValue}
          setStoreValue={setStoreValue}
        />
      </CSSTransition>
    </Container>
  );
};

export default FilterItem;
