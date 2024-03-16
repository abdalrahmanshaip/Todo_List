"use client";
import React, { FormEventHandler, useState } from "react";
import { GoPlus } from "react-icons/go";
import Modal from "./Modal";
import { AddTodo } from "../../../api/api";
import { useRouter } from "next/navigation";
import tasks from "../../../data/todos.json";
import { v4 as uuidv4 } from "uuid";

function AddTask() {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>("");
  const handelNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await AddTodo({
      id: uuidv4(),
      text: newTodo,
    });
    setNewTodo("");
    setModalOpen(false);
    router.refresh();
  };
  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full"
      >
        Add new task <GoPlus className="ml-2" size={18} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handelNewTodo}>
          <h3 className=" mb-4 font-bold text-lg">Add To Task</h3>
          <div className="mode-active">
            <input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
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
    </div>
  );
}

export default AddTask;
