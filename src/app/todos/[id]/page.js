import { db } from "@/db";
import { notFound } from "next/navigation";

const findFirst = async ({ params }) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const { id } = await params;
  const todo = await db.todo.findFirst({
    where: {
      id: Number(id),
    },
  });

  if (!todo) return notFound();

  return (
    <div>
      <h1>Detalhes de uma tarefa {todo.titulo}</h1>
    </div>
  );
};

export default findFirst;
