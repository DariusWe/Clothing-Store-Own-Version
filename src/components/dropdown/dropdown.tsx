import { Container, ListItem } from "./dropdown.styles";
import { LIST_TYPES } from "../../constants/LIST_TYPES";
import type { ProductFilter } from "../products-filter-section/products-filter-section";

// ToDo: Maybe more elegant solution for the return code?

type DropDownProps = Omit<ProductFilter, "label">;

const DropDownMenu = ({ entries = [], listType = LIST_TYPES.NONE, currStoreValue, setStoreValue }: DropDownProps) => {
  return (
    <Container>
      {listType === LIST_TYPES.NONE &&
        entries.map((entry) => (
          <ListItem key={entry}>
            <span>{entry}</span>
          </ListItem>
        ))}
      {listType === LIST_TYPES.RADIO &&
        entries.map((entry) => (
          <ListItem
            key={entry}
            onClick={() => {
              setStoreValue(entry);
            }}
          >
            {currStoreValue === entry ? <i className="fa-solid fa-circle" /> : <i className="fa-regular fa-circle" />}
            <span>{entry}</span>
          </ListItem>
        ))}
      {listType === LIST_TYPES.CHECKBOX &&
        entries.map((entry) => (
          <ListItem key={entry} onClick={() => setStoreValue(entry)}>
            {currStoreValue.includes(entry) ? (
              <i className="fa-solid fa-square" />
            ) : (
              <i className="fa-regular fa-square" />
            )}
            <span>{entry}</span>
          </ListItem>
        ))}
    </Container>
  );
};

export default DropDownMenu;
