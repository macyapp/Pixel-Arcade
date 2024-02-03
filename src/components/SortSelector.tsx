import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added (Newest)" },
    { value: "added", label: "Date added (Oldest)" },
    { value: "name", label: "Name (A to Z)" },
    { value: "-name", label: "Name (Z to A)" },
    { value: "-released", label: "Release date (Newest)" },
    { value: "released", label: "Release date (Oldest)" },
    { value: "-metacritic", label: "Popularity (Most)" },
    { value: "metacritic", label: "Popularity (Least)" },
    { value: "-rating", label: "Average rating (Descending)" },
    { value: "rating", label: "Average rating (Ascending)" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: {currentSortOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              onClick={() => onSelectSortOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
