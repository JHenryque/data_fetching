import Image from "next/image";
import TodoPage from "./todos/create/page";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center  font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <TodoPage className="text-3xl font-bold leading-tight tracking-tight text-zinc-800 dark:text-zinc-500 sm:text-4xl" />

        <p className="mt-4 text-zinc-600 dark:text-zinc-300">
          Get started by editing <code className="font-mono">app/page.js</code>
        </p>
      </main>
    </div>
  );
}
