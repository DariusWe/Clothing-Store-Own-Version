import { Container, SelectedFilters } from "./filter-section.styles";
import FilterItem from "./filter-item";
import { useSelector, useDispatch } from "react-redux";
import { selectSortByFilterValue, selectColorFilterValues } from "../store/filters/filters.selectors";
import { setSortByFilterValue, setColorFilterValues } from "../store/filters/filters.actions";

const FilterSection = () => {
  console.log("Render/Rerender of Filter");

  const sortByFilterValue = useSelector(selectSortByFilterValue);
  const colorFilterValues = useSelector(selectColorFilterValues);
  const dispatch = useDispatch();

  const PRODUCT_FILTERS = [
    {
      label: "Sort By",
      listType: "radio",
      // ToDo: Replace strings in following line with constants that are handled in a centralized place.
      entries: ["recommended", "lowest price", "highest price"],
      currStoreValue: sortByFilterValue,
      setStoreValue: (value) => dispatch(setSortByFilterValue(value)),
    },
    {
      label: "Color",
      listType: "checkbox",
      // ToDo: Replace strings in following line with constants that are handled in a centralized place.
      entries: ["white", "black", "red", "purple", "green", "blue", "orange", "pink"],
      currStoreValue: colorFilterValues,
      setStoreValue: (value) => dispatch(setColorFilterValues(value)),
    },
    {
      label: "Filter3",
    },
    {
      label: "Filter4",
    },
  ];

  return (
    <Container>
      {PRODUCT_FILTERS.map((filter) => (
        <FilterItem key={filter.label} filter={filter} />
      ))}
      {colorFilterValues.length > 0 ? (
        <SelectedFilters>
          <p>Selected Filters:</p>
          {colorFilterValues.map((color) => (
            <span key={color}>
              {color}
              <i className="fa-solid fa-xmark" onClick={() => dispatch(setColorFilterValues(color))}></i>
            </span>
          ))}
        </SelectedFilters>
      ) : null}
    </Container>
  );
};

export default FilterSection;
