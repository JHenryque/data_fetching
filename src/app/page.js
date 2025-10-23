import Button from "@/components/Button";
import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const todos = await db.todo.findMany();

  return (
    <div className="flex min-h-screen justify-center font-sans">
      <main className="flex w-full max-w-3xl flex-col items-center sm:items-start">
        <h1 className="text-2xl font-bold">Tarefas!</h1>
        <div className="space-y-4 w-full">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className={`bg-gray-100 p-4 rounded-lg shadow ${
                todo.status === "completa" ? "bg-green-100" : ""
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold">{todo.titulo}</h2>
                  <p>{todo.descricao}</p>
                </div>
                {/* Formulário para alternar o status */}
                <div className="flex items-center gap-2">
                  <p className="italic">completar?</p>
                  <form action={"toggleTodoStatus"}>
                    <input type="hidden" name="id" value={todo.id} />
                  </form>
                </div>
              </div>

              <div className="flex space-x-2 mt-3">
                <Link
                  href={`/todos/${todo.id}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Visualizar
                </Link>
                <Link
                  href={`/todos/${todo.id}/edit/`}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                >
                  Editar
                </Link>
                {/* <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Excluir
                </button> */}
                <form action={"deleteTodo"}>
                  <input type="hidden" name="id" value={todo.id} />
                  <Button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Excluir
                  </Button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
