"use client";
import { useGlobalContext } from "@/context/GlobalContext";

const SortSelector = () => {
  const sortOrderList = [
    { value: "", label: "Relavence" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const { sortOrder, setSortOrder } = useGlobalContext();

  return (
    <select
      className="bg-ctrl-start-green-950 text-ctrl-start-green-50 text-xl p-2 rounded-lg text-left"
      onChange={(e) => setSortOrder(e.target.value)}
      value={sortOrder || ""}
    >
      <option value="">Order by:</option>
      {sortOrderList.map((order) => (
        <option key={order.value} value={order.value}>
          {order.label}
        </option>
      ))}
    </select>
  );
};

export default SortSelector;
