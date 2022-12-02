import { Container, SelectedFilters } from "./products-filter-section.styles";
import { FilterItem } from "../index";
import { setSortBy, setColors, SORT_BY_VALUES, COLOR_FIILTER_VALUES } from "../../store/slices/filters.slice";
import { useTypedSelector, useTypedDispatch } from "../../store/typed-hooks";
import { LIST_TYPES } from "../../constants/LIST_TYPES";

export type ProductFilter = {
  label: string;
  listType: LIST_TYPES;
  entries: string[];
  currStoreValue: string | string[];
  setStoreValue: (value: any) => void;
};

const ProductsFilterSection = () => {
  const sortBy = useTypedSelector((state) => state.filters.sortBy);
  const colors = useTypedSelector((state) => state.filters.colors);
  const dispatch = useTypedDispatch();

  const PRODUCT_FILTERS: ProductFilter[] = [
    {
      label: "Sort By",
      listType: LIST_TYPES.RADIO,
      entries: [SORT_BY_VALUES.RECOMMENDED, SORT_BY_VALUES.LOWEST_PRICE, SORT_BY_VALUES.HIGHEST_PRICE],
      currStoreValue: sortBy,
      setStoreValue: (value): void => {
        dispatch(setSortBy(value as SORT_BY_VALUES));
      },
    },
    {
      label: "Color",
      listType: LIST_TYPES.CHECKBOX,
      entries: Object.values(COLOR_FIILTER_VALUES),
      currStoreValue: colors,
      setStoreValue: (value): void => {
        dispatch(setColors(value as COLOR_FIILTER_VALUES));
      },
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

export default ProductsFilterSection;
