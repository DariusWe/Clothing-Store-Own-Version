import { Container, ListItem } from "./dropdown.styles";
import { LIST_TYPES } from "../../constants/LIST_TYPES";
/* 
The DropdownMenu component is designed to be reused for different use cases. Input arguments:
  - the menu entries (as an array)
  - the list type (radio, checkbox, ...)
  - a dispatch function (that defines what happens when user clicks an menu entry)
  - a selector function (to retrieve the currently selected menu entries)
*/

// ToDo: Maybe more elegant solution for the return code?

type DropDownProps = {
  listType: LIST_TYPES;
  entries: string[];
  currStoreValue: string | string[];
  setStoreValue: (value: string) => void;
};

const DropDownMenu = ({ entries = [], listType = LIST_TYPES.NONE, currStoreValue, setStoreValue }: DropDownProps) => {
  console.log("DropDownMenu");
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
