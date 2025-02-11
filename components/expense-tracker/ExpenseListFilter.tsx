interface Props {
  categories: string[];
  onSelectCategories: (category: string) => void;
}

const ExpenseListFilter = ({ categories, onSelectCategories }: Props) => {
  return (
    <select
      name="category-filter"
      onChange={(e) => onSelectCategories(e.target.value)}
      className="rounded-lg px-3 py-2 border border-expense-tracker-medium-purple focus:outline-expense-tracker-neon text-center text-expense-tracker-purple   self-end mb-2
      "
    >
      <option value="all" className="">
        All
      </option>
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default ExpenseListFilter;
