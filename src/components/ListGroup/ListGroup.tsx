import "./ListGroup.css";
// import styles from "./ListGroup.module.css";
import { useState } from "react";

// const List = styled.ul`
//   list-style: none;
//   padding: 0;
// `;

// const ListItem = styled.li<ListItemProps>`
//   padding: 5px 0;
//   background: ${(props) => (props.active ? "blue" : "none")};
// `;

// interface ListItemProps {
//   active: boolean;
// }

interface ListProps {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectedItem }: ListProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="listGroup">
        {/* <ul className={[styles["listGroup"], styles["container"]].join(" ")}> */}
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
