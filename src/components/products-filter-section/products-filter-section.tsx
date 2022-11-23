import { Container, SelectedFilters } from "./products-filter-section.styles";
import { FilterItem } from "../index";
import { useSelector } from "react-redux";
import { setSortBy, setColors, SORT_BY_VALUE, COLOR_FIILTER_VALUES } from "../../store/slices/filters.slice";
import { useTypedSelector, useTypedDispatch } from "../../store/typed-hooks";
import { RootStateType } from "../../store/root-reducer";
import { LIST_TYPES } from "../../constants/LIST_TYPES";

// To infer the type of the state via useSelector or useTypedSelector, you have to export the RootStateType from the ROOTREDUCER, not
// from the store (like it's said in the docs). See here for more infos:
// https://stackoverflow.com/questions/59814381/typing-redux-toolkits-store-in-typescript

export type ProductFilter = {
  label: string;
  listType: LIST_TYPES;
  entries: string[];
  currStoreValue: string | string[];
  setStoreValue: (value: string) => void;
};
//
const ProductsFilterSection = () => {
  console.log("ProductsFilterSection");
  // Both selecting methods possible. Second one is recommended as you don't have to pass RootStateType into every selector.
  const sortBy = useSelector((state: RootStateType) => state.filters.sortBy);
  const colors = useTypedSelector((state) => state.filters.colors);
  const dispatch = useTypedDispatch();

  const PRODUCT_FILTERS: ProductFilter[] = [
    {
      label: "Sort By",
      listType: LIST_TYPES.RADIO,
      entries: [SORT_BY_VALUE.RECOMMENDED, SORT_BY_VALUE.LOWEST_PRICE, SORT_BY_VALUE.HIGHEST_PRICE],
      currStoreValue: sortBy,
      setStoreValue: (value: string): void => {
        dispatch(setSortBy(value));
      },
    },
    {
      label: "Color",
      listType: LIST_TYPES.CHECKBOX,
      entries: COLOR_FIILTER_VALUES,
      currStoreValue: colors,
      setStoreValue: (value: string): void => {
        dispatch(setColors(value));
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
