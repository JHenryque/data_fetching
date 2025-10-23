import { updateFindById } from "@/actions";
import TodoForm from "@/components/TodoForm";

export default async function EditPage({ params }) {
  const { id } = await params;
  const findById = await updateFindById(id);

  //await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">
        Editando Tarefa: {findById.titulo}
      </h1>
      <TodoForm todo={findById} />
    </div>
  );
}
