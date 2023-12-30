interface ListProps {
  items: string[];
  heading: string;
}

const ListGroup = ({ items, heading }: ListProps) => {
  return (
    <>
      <h1>{heading}</h1>
      <ul>
        {items.map((items) => (
          <li key={items}>{items}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
