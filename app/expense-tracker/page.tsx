"use client";
import { nanoid } from "nanoid";
import { FormEvent, useState } from "react";

export interface Expense {
  id: string;
  description: string;
  cost: number;
  category: string;
}

const ExpenseTracker = () => {
  const [description, setDescription] = useState<string>("");
  const [cost, setCost] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [newCategory, setNewCategory] = useState<string>("");

  const [categories, setCategories] = useState<string[]>([
    "groceries",
    "utilities",
  ]);

  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const [expenses, setExpenses] = useState<Expense[]>([
    { id: nanoid(), description: "Milk", cost: 3, category: "groceries" },
    {
      id: nanoid(),
      description: "Electricity",
      cost: 240,
      category: "utilities",
    },
  ]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newExpense: Expense = {
      id: nanoid(),
      description,
      cost,
      category,
    };
    setExpenses((prev) => [...prev, newExpense]);
    setDescription("");
    setCost(0);
    setCategory("");
  };

  const handleAddCategory = () => {
    setCategories((prev) => [...prev, newCategory]);
    setCategory(newCategory);
    setNewCategory("");
  };

  const handleDelete = (expenseId: string) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== expenseId));
  };

  return (
    <div className="bg-expense-tracker-purple min-h-screen p-5 flex flex-col items-center ">
      <h2 className="text-5xl font-extrabold text-expense-tracker-neon mb-10">
        Expense Tracker
      </h2>

      {/* new expense form */}
      <form
        className="text-expense-tracker-purple space-y-5 w-full md:max-w-xl"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label
            htmlFor="description"
            className="text-xl font-bold text-expense-tracker-medium-purple mb-2"
          >
            Description
          </label>
          <input
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            id="description"
            name="description"
            placeholder="Enter a Description"
            className="rounded-lg px-3 py-2 bg-expense-tracker-light-purple focus:outline-expense-tracker-neon placeholder:text-expense-tracker-medium-purple"
          />
        </div>

        <div className="flex flex-col relative">
          <label
            htmlFor="cost"
            className="text-xl font-bold text-expense-tracker-medium-purple mb-2 "
          >
            Cost
          </label>
          <span className="absolute top-11 left-3 text-expense-tracker-medium-purple">
            $
          </span>
          <input
            required
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
            type="number"
            id="cost"
            name="cost"
            placeholder="Enter a Cost"
            className="rounded-lg pl-6 px-3 py-2 bg-expense-tracker-light-purple focus:outline-expense-tracker-neon placeholder:text-expense-tracker-medium-purple"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-xl font-bold text-expense-tracker-medium-purple mb-2">
            Category
          </label>
          <select
            required
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg px-3 py-2 bg-expense-tracker-light-purple focus:outline-expense-tracker-neon text-expense-tracker-purple"
          >
            <option value="" className="">
              Select a Category
            </option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
            <option value="new-category">Add New Category</option>
          </select>
        </div>

        {category === "new-category" && (
          <div className="flex flex-col">
            <label
              htmlFor="add-new-category"
              className="text-xl font-bold text-expense-tracker-medium-purple mb-2"
            >
              New Category
            </label>
            <div className="flex">
              <input
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                type="text"
                id="add-new-category"
                name="add-new-category"
                placeholder="Enter a New Category"
                className="rounded-l-lg px-3 py-2 bg-expense-tracker-light-purple focus:outline-expense-tracker-neon placeholder:text-expense-tracker-medium-purple flex-1"
              />
              <button
                className="bg-expense-tracker-medium-purple text-expense-tracker-purple text-lg font-bold w-fit px-3 py-1 rounded-r-lg hover:bg-expense-tracker-neon transition"
                onClick={handleAddCategory}
              >
                Add
              </button>
            </div>
          </div>
        )}
        <button
          type="submit"
          className="bg-expense-tracker-neon text-expense-tracker-purple font-bold text-xl px-3 py-2 rounded-lg w-full hover:bg-expense-tracker-medium-purple transition "
        >
          Add Expense
        </button>
      </form>

      {/* expense list table */}
      {expenses.length == 0 ? (
        <div className="bg-expense-tracker-medium-purple p-2 rounded-lg text-center mt-10">
          <p className="text-2xl font-bold text-expense-tracker-light-purple">
            No expenses!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-4 bg-expense-tracker-light-purple pt-3 justify-items-center mt-14 rounded-lg w-full md:max-w-4xl">
          <select
            name="category-filter"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="rounded-lg px-3 py-2 border border-expense-tracker-medium-purple focus:outline-expense-tracker-neon text-expense-tracker-purple col-start-4 mr-10"
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
                <button
                  className="place-self-end"
                  onClick={() => handleDelete(id)}
                >
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
                    categoryFilter === "all" ||
                    expense.category === categoryFilter
                )
                .reduce((sum, expense) => sum + expense.cost, 0)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpenseTracker;
