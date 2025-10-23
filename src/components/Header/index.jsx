import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-500 text-slate-100 text-2xl py-10 mb-[65px]">
      <nav className="container mx-auto flex justify-center gap-5">
        <Link href="/">Tarefas</Link>
        <Link href="/todos/create">Inserir nova tarefa</Link>
      </nav>
    </header>
  );
}
