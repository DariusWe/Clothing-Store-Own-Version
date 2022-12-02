import { Container, CategoryTitle, CategoryDescription, ProductsContainer } from "./category-page.styles";
import { useState, useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import { useTypedSelector, useTypedDispatch } from "../../store/typed-hooks";
import { setSortBy, resetColors } from "../../store/slices/filters.slice";
import type { Item } from "../../store/slices/products.slice";
import { ProductCard, ProductsFilterSection, LoadingSpinner } from "../../components";
import { SORT_BY_VALUES, COLOR_FIILTER_VALUES } from "../../store/slices/filters.slice";

const CategoryPage = () => {
  const [products, setProducts] = useState<Item[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Item[]>([]);
  const { gender, category: urlCategoryName } = useParams();
  const womenCategories = useTypedSelector((state) => state.products.womenCategories);
  const menCategories = useTypedSelector((state) => state.products.menCategories);
  const isLoading = useTypedSelector((state) => state.products.isLoading);
  const colors = useTypedSelector((state) => state.filters.colors);
  const sortBy = useTypedSelector((state) => state.filters.sortBy);
  const dispatch = useTypedDispatch();

  useLayoutEffect(() => {
    // useLayoutEffect because otherwise bugs when changing category while filters active.
    if (womenCategories.length > 0 && menCategories.length > 0) {
      const categoryProducts =
        gender === "women"
          ? womenCategories.filter((cat) => cat.titleSanitized === urlCategoryName)[0].items
          : menCategories.filter((cat) => cat.titleSanitized === urlCategoryName)[0].items;
      setProducts(categoryProducts);
      setFilteredProducts(categoryProducts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [womenCategories, menCategories, urlCategoryName]);

  useEffect(() => {
    if (colors.length > 0) {
      dispatch(resetColors());
    }
    if (sortBy !== SORT_BY_VALUES.RECOMMENDED) {
      dispatch(setSortBy(SORT_BY_VALUES.RECOMMENDED));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlCategoryName]);

  useEffect(() => {
    // Whenever some filter gets applied by the user, run this useEffect. Filter first, then sort the filtered selection.
    // Only run logic if there are actual products. Without this if statement products on the first load will be an empty array.
    // Should be fixed: the following line does not detect products with more than one color.
    if (products.length > 0) {
      const filtered = colors.length > 0 ? products.filter((product) => colors.includes(product.color as COLOR_FIILTER_VALUES)) : [...products];
      switch (sortBy) {
        case SORT_BY_VALUES.RECOMMENDED:
          setFilteredProducts(filtered.sort((a, b) => a.id - b.id));
          break;
        case SORT_BY_VALUES.LOWEST_PRICE:
          setFilteredProducts(filtered.sort((a, b) => a.price - b.price));
          break;
        case SORT_BY_VALUES.HIGHEST_PRICE:
          setFilteredProducts(filtered.sort((a, b) => b.price - a.price));
          break;
        default:
          break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colors, sortBy]);

  return (
    <Container>
      <CategoryTitle>{urlCategoryName && urlCategoryName.replace("&", " & ")}</CategoryTitle>
      <CategoryDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis blandit bibendum. Ut ac elit at nunc
        porta imperdiet. Nulla rutrum velit at dolor iaculis efficitur. Sed sit amet porta magna. Maecenas eu ipsum eu
        mi ornare maximus nec at lorem. Phasellus non maximus enim. Nullam congue suscipit condimentum. Aliquam non
        mauris nunc.
      </CategoryDescription>
      <ProductsFilterSection />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ProductsContainer>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}

          {filteredProducts.length === 0 ? <span>No items found for the selected filters.</span> : null}
        </ProductsContainer>
      )}
    </Container>
  );
};

export default CategoryPage;
