import { db } from "@/db";

const findFirst = async ({ params }) => {
  const { id } = await params;
  const todo = await db.todo.findFirst({
    where: {
      id: Number(id),
    },
  });

  return (
    <div>
      <h1>Detalhes de uma tarefa {todo.titulo}</h1>
    </div>
  );
};

export default findFirst;
