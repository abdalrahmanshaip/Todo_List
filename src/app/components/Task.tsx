"use client";
import React, { FormEventHandler, useState } from "react";
import { typeTasks } from "../../../types/types";
import { GrEdit } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "../../../api/api";

interface TaskProps {
  task: typeTasks;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const router = useRouter();
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [taskTodo, setTaskTodo] = useState<string>(task.text);
  const handelEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskTodo,
    });
    setEditModalOpen(false);
    router.refresh();
  };
  const handelDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setDeleteModalOpen(false);
    router.refresh();
  };
  return (
    <tr key={task.id}>
      <td className="sticky inset-y-0 start-0 bg-white px-4 py-2">
        <label className="sr-only" htmlFor="Row1">
          Row 1
        </label>

        <input
          className="size-5 rounded border-gray-300"
          type="checkbox"
          id="Row1"
        />
      </td>
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {task.text}
      </td>
      <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex justify-center align-item-center">
        <GrEdit
          size={25}
          className=" text-blue-400 cursor-pointer"
          onClick={() => setEditModalOpen(true)}
        />
        <Modal modalOpen={editModalOpen} setModalOpen={setEditModalOpen}>
          <form onSubmit={handelEditTodo}>
            <h3 className=" mb-4 font-bold text-lg">Edit task</h3>
            <div className="mode-active">
              <input
                value={taskTodo}
                onChange={(e) => setTaskTodo(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-96 text-white"
              />
              <button type="submit" className="btn ml-2">
                Add
              </button>
            </div>
          </form>
        </Modal>
        <MdDeleteOutline
          onClick={() => setDeleteModalOpen(true)}
          size={25}
          className=" text-red-400 ml-2 cursor-pointer"
        />
        <Modal modalOpen={deleteModalOpen} setModalOpen={setDeleteModalOpen}>
          <h3 className=" font-bold text-2xl text-white">
            Are you sure to delet this !
          </h3>
          <div className="mode-active ">
            <button
              type="submit"
              className="btn"
              onClick={() => handelDeleteTask(task.id)}
            >
              yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
