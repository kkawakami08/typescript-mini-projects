import { Expense } from "@/app/expense-tracker/page";

interface Props {
  expenses: Expense[];
  handleDelete: (id: string) => void;
  categoryFilter: string;
}

const ExpenseList = ({ expenses, handleDelete, categoryFilter }: Props) => {
  if (expenses.length == 0) {
    return (
      <div className="bg-expense-tracker-medium-purple p-2 rounded-lg text-center mt-10">
        <p className="text-2xl font-bold text-expense-tracker-light-purple">
          No expenses!
        </p>
      </div>
    );
  }
  console.log(categoryFilter, "from expense list");
  return (
    <div className="grid grid-cols-4 bg-expense-tracker-light-purple justify-items-center  rounded-lg w-full md:max-w-4xl pt-3">
      <div className="grid grid-cols-4 justify-items-center col-span-4 w-full border-b px-5 py-1  border-expense-tracker-purple ">
        <h4 className="text-xl font-semibold">Description</h4>
        <h4 className="text-xl font-semibold">Cost</h4>
        <h4 className="text-xl font-semibold">Category</h4>
      </div>
      {expenses
        .filter(
          (expense) =>
            categoryFilter === "all" || expense.category === categoryFilter
        )
        .map(({ id, description, cost, category }, index) => (
          <div
            className={`grid grid-cols-4 justify-items-center col-span-4 w-full py-2 border-b px-5 border-expense-tracker-purple items-center font-medium ${
              index % 2 == 0 && "bg-expense-tracker-neon "
            }`}
            key={index}
          >
            <p>{description}</p>
            <p>${cost}</p>
            <p>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
            <button className="place-self-end" onClick={() => handleDelete(id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8 text-expense-tracker-purple hover:text-expense-tracker-medium-purple transition"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ))}
      <div
        className={`grid grid-cols-4 justify-items-center col-span-4 w-full py-2  px-5 border border-expense-tracker-medium-purple border-t-0 items-center font-semibold text-xl bg-expense-tracker-purple rounded-b-lg text-expense-tracker-light-purple`}
      >
        {" "}
        <p className="">Total</p>
        <p>
          $
          {expenses
            .filter(
              (expense) =>
                categoryFilter === "all" || expense.category === categoryFilter
            )
            .reduce((sum, expense) => sum + expense.cost, 0)}
        </p>
      </div>
    </div>
  );
};

export default ExpenseList;
