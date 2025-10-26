"use server";

import { redirect } from "next/navigation";
import { db } from "./db";
import { revalidatePath } from "next/cache";

async function deleteTodo(formData) {
  const id = Number(formData.get("id"));
  await db.todo.delete({ where: { id } });

  revalidatePath("/");
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

  revalidatePath("/");

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

  try {
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

    revalidatePath("/");
    redirect("/");
  } catch (error) {
    return {
      errors: error.message,
    };
  }
};

const toggleTodoStatus = async (formData) => {
  const id = Number(formData.get("id"));

  const todo = await db.todo.findFirst({ where: { id } });

  if (!todo) return notFound();

  const status = todo.status === "pendente" ? "completa" : "pendente";

  await db.todo.update({ where: { id }, data: { status } });

  revalidatePath("/");
  redirect("/");
};

export { deleteTodo, addTodo, updateFindById, updateTodo, toggleTodoStatus };
