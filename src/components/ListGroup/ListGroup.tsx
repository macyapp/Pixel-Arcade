import "./ListGroup.css";
import styled from "styled-components";
import { useState } from "react";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 5px 0;
`;

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
      <List>
        {/* <ul className={[styles["listGroup"], styles["container"]].join(" ")}> */}
        {items.map((item, index) => (
          <ListItem
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ListGroup;
