import { db } from "@/db";

export default async function Home() {
  const todos = await db.todo.findMany();

  return (
    <div className="flex min-h-screen justify-center font-sans">
      <main className="flex w-full max-w-3xl flex-col items-center sm:items-start">
        <h1 className="text-2xl font-bold">Tarefas!</h1>
        <div className="space-y-4 w-full">
          {todos.map((todo) => (
            <div key={todo.id} className="bg-gray-300 rounded-lg shadow p-4">
              <h2>{todo.titulo}</h2>
              <p>{todo.descricao}</p>
              <p
                className={
                  todo.status === "pendente" ? "text-red-500" : "text-green-500"
                }
              >
                {todo.status === "pendente" ? "Pendente" : "Concluida"}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
