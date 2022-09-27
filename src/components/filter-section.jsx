import { Container, SelectedFilters } from "./filter-section.styles";
import FilterItem from "./filter-item";
import { useSelector, useDispatch } from "react-redux";
import { setSortBy, setColors } from "../store/filters.slice";

const FilterSection = () => {
  console.log("Render/Rerender of Filter");
  const sortBy = useSelector((state) => state.filters.sortBy);
  const colors = useSelector((state) => state.filters.colors);
  const dispatch = useDispatch();

  const PRODUCT_FILTERS = [
    {
      label: "Sort By",
      listType: "radio",
      // ToDo: Replace strings in following line with constants that are handled in a centralized place.
      entries: ["recommended", "lowest price", "highest price"],
      currStoreValue: sortBy,
      setStoreValue: (value) => dispatch(setSortBy(value)),
    },
    {
      label: "Color",
      listType: "checkbox",
      // ToDo: Replace strings in following line with constants that are handled in a centralized place.
      entries: ["white", "black", "red", "purple", "green", "blue", "orange", "pink"],
      currStoreValue: colors,
      setStoreValue: (value) => dispatch(setColors(value)),
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
      {colors.length > 0 ? (
        <SelectedFilters>
          <p>Selected Filters:</p>
          {colors.map((color) => (
            <span key={color}>
              {color}
              <i className="fa-solid fa-xmark" onClick={() => dispatch(setColors(color))}></i>
            </span>
          ))}
        </SelectedFilters>
      ) : null}
    </Container>
  );
};

export default FilterSection;
