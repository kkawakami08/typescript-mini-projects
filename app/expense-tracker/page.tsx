"use client";
import { nanoid } from "nanoid";
import { FormEvent, useState } from "react";
import ExpenseList from "@/components/expense-tracker/ExpenseList";
import ExpenseListFilter from "@/components/expense-tracker/ExpenseListFilter";
import Link from "next/link";

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

  const [expenses, setExpenses] = useState<Expense[]>([]);

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

  const handleSelectCategories = (selectedCategory: string) => {
    setCategoryFilter(selectedCategory);
  };

  return (
    <div className="bg-expense-tracker-purple min-h-screen p-5 flex flex-col items-center relative">
      <Link href={"/"} className="absolute left-2 top-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-8 text-expense-tracker-neon hover:text-expense-tracker-medium-purple transition"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
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

      <div className="mt-10 mb-3 w-full md:max-w-4xl flex flex-col">
        {expenses.length !== 0 && (
          <ExpenseListFilter
            categories={categories}
            onSelectCategories={handleSelectCategories}
          />
        )}

        <ExpenseList
          expenses={expenses}
          handleDelete={handleDelete}
          categoryFilter={categoryFilter}
        />
      </div>
    </div>
  );
};

export default ExpenseTracker;
