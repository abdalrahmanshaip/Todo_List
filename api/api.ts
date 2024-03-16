import { typeTasks } from "../types/types";

const dataUrl = "http://localhost:3001";

export const getAllData = async (): Promise<typeTasks[]> => {
  const res = await fetch(`${dataUrl}/tasks`, { cache: "no-store" });
  const todo = res.json();
  return todo;
};

export const AddTodo = async (todo: typeTasks): Promise<typeTasks> => {
  const res = await fetch(`${dataUrl}/tasks`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const NewTodo = await res.json();
  return NewTodo;
};
export const editTodo = async (todo: typeTasks): Promise<typeTasks> => {
  const res = await fetch(`${dataUrl}/tasks/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const UpdatedTodo = await res.json();
  return UpdatedTodo;
};
export const deleteTodo = async (id: string): Promise<void> => {
  const res = await fetch(`${dataUrl}/tasks/${id}`, {
    method: "DELETE",
  });
};
