import { updateFindById } from "@/actions";

export default async function EditPage({ params }) {
  const { id } = await params;
  const findById = await updateFindById(id);

  //await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div>
      <h1>Editando Tarefa: {findById.titulo}</h1>
    </div>
  );
}
