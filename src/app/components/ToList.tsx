import React from "react";
import { typeTasks } from "../../../types/types";
import Task from "./Task";
interface TodoListProps {
  tasks: typeTasks[];
}
const ToList: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div className="">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="sticky inset-y-0 start-0 bg-white px-4 py-2">
              <label htmlFor="SelectAll" className="sr-only">
                Select All
              </label>

              <input
                type="checkbox"
                id="SelectAll"
                className="size-5 rounded border-gray-300 "
              />
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Tasks
            </th>

            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToList;
