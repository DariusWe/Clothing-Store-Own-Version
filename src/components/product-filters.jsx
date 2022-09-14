import { Container } from "./product-filters.styles";
import FilterItem from "./filter-item";
import { useSelector, useDispatch } from "react-redux";
import { selectSortByFilterValue, selectColorFilterValues } from "../store/filters/filters.selectors";
import { setSortByFilterValue, setColorFilterValues } from "../store/filters/filters.actions";

const ProductFilters = () => {
  console.log("Render/Rerender of Filter");

  const sortByFilterValue = useSelector(selectSortByFilterValue);
  const colorFilterValue = useSelector(selectColorFilterValues);
  const dispatch = useDispatch();

  const PRODUCT_FILTERS = [
    {
      label: "Sort By",
      listType: "radio",
      entries: ["recommended", "lowest price", "highest price"],
      currStoreValue: sortByFilterValue,
      setStoreValue: (value) => dispatch(setSortByFilterValue(value)),
    },
    {
      label: "Color",
      listType: "checkbox",
      entries: ["white", "black", "red", "purple", "green", "blue", "orange", "pink"],
      currStoreValue: colorFilterValue,
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
    </Container>
  );
};

export default ProductFilters;
