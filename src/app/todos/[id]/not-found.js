import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>404 - Pagina nao encontrada! {":ç"} </h1>
      <Link href="/">voltar</Link>
    </div>
  );
}
