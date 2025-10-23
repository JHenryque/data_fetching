"use server";

import { redirect } from "next/navigation";
import { db } from "./db";

async function deleteTodo(formData) {
  const id = Number(formData.get("id"));
  await db.todo.delete({ where: { id } });

  redirect("/");
}

const addTodo = async (formData) => {
  const titulo = formData.get("titulo");
  const descricao = formData.get("descricao");
  const status = "pendente";

  const todo = await db.todo.create({
    data: {
      titulo,
      descricao,
      status,
    },
  });

  redirect("/");
};

const updateFindById = async (id) => {
  if (!id) throw new Error("Function not implemented.");

  const todo = await db.todo.findFirst({ where: { id: Number(id) } });
  return todo;
};

const updateTodo = async (formState, formData) => {
  const id = Number(formData.get("id"));
  const titulo = formData.get("titulo");
  const descricao = formData.get("descricao");
  //const status = formData.get("status");

  if (titulo.length < 5) {
    return {
      errors: "Título precisa ter pelo menos 5 caracteres.",
    };
  }

  if (descricao.length < 10) {
    return {
      errors: "Descrição precisa ter pelo menos 10 caracteres.",
    };
  }

  await db.todo.update({
    where: { id },
    data: { titulo, descricao },
  });

  redirect("/");
};

export { deleteTodo, addTodo, updateFindById, updateTodo };
