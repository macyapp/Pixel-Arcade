import categories from "../categories";

interface ExpenseFilterProps {
  onSelectedCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectedCategory }: ExpenseFilterProps) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectedCategory(e.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
