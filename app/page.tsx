import Link from "next/link";

const linkClasses: string =
  " bg-emerald-800 text-white p-2 text-xl font-semibold rounded-lg hover:bg-emerald-200 hover:text-emerald-900 transition";

const HomePage = () => {
  return (
    <div className="m-5 flex flex-col items-center gap-5">
      <h1 className="text-5xl font-bold">Mini Projects</h1>
      <Link href={"/expense-tracker"} className={linkClasses}>
        Expense Tracker
      </Link>
      <Link href={"/ctrl-start"} className={linkClasses}>
        Ctrl+Start
      </Link>
    </div>
  );
};

export default HomePage;
