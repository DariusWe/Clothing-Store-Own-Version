import { Container, ListItem } from "./dropdown.styles";
/* 
The DropdownMenu component is designed to be reused for different use cases. Input arguments:
  - the menu entries (as an array)
  - the list type (radio, checkbox, ...)
  - a dispatch function (that defines what happens when user clicks an menu entry)
  - a selector function (to retrieve the currently selected menu entries)
*/

// ToDo: Maybe more elegant solution for the return code?
const DropDownMenu = ({ entriesArray = [], listType = "none", setStoreValue, currStoreValue }) => {
  return (
    <Container>
      {listType === "none" &&
        entriesArray.map((entry) => (
          <ListItem key={entry}>
            <span>{entry}</span>
          </ListItem>
        ))}
      {listType === "radio" &&
        entriesArray.map((entry) => (
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
      {listType === "checkbox" &&
        entriesArray.map((entry) => (
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
