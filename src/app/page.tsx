import { getAllData } from "../../api/api";
import { typeTasks } from "../../types/types";
import AddTask from "./components/AddTask";
import ToList from "./components/ToList";

export default async function Home() {
  const tasks = await getAllData();
  console.log(tasks);
  return (
    <main className="max-w-5xl mx-auto  mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className=" text-2xl font-bold">To Do List</h1>
        <AddTask />
        <ToList tasks={tasks} />
      </div>
    </main>
  );
}
