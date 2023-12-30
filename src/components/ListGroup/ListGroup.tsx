import styles from "./ListGroup.module.css";

interface ListProps {
  items: string[];
  heading: string;
}

const ListGroup = ({ items, heading }: ListProps) => {
  return (
    <>
      <h1>{heading}</h1>
      <ul className={[styles.listGroup, styles.container].join(" ")}>
      {/* <ul className={[styles["listGroup"], styles["container"]].join(" ")}> */}
        {items.map((items) => (
          <li key={items}>{items}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
