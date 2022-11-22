import { useState, useEffect } from "react";
import { StyledHeartIcon } from "./heart-icon-navbar.styles";
import { useTypedSelector, useTypedDispatch } from "../../../store/typed-hooks";
import { toggleFavouritesList } from "../../../store/slices/favourites.slice";

const HeartIconNavbar = () => {
  const dispatch = useTypedDispatch();
  const likedItems = useTypedSelector((state) => state.favourites.items);
  const [prevLikedItemsLength, setPrevLikedItemsLength] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setPrevLikedItemsLength(likedItems.length);
    }, 500);
  }, [likedItems.length]);

  return (
    <StyledHeartIcon
      className="fa-solid fa-heart"
      onClick={() => dispatch(toggleFavouritesList())}
      animate={likedItems.length > prevLikedItemsLength ? true : false}
    ></StyledHeartIcon>
  );
};

export default HeartIconNavbar;
