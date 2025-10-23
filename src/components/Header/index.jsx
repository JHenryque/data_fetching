import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center items-center my-15 gap-5 text-2xl">
      <Link href="/">Tarefas</Link>
      <Link href="/todos/create">Inserir nova tarefa</Link>
    </header>
  );
}
