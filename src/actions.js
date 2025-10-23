import { redirect } from "next/navigation";
import { db } from "./db";

async function deleteTodo(formData) {
  "use server";
  const id = Number(formData.get("id"));
  await db.todo.delete({ where: { id } });

  redirect("/");
}

const addTodo = async (formData) => {
  "use server";

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

export { deleteTodo, addTodo };
