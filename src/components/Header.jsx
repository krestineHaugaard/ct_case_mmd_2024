import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1> Hello World</h1>
      <Link href="/" prefetch={false}>
        Forside
      </Link>
      <Link href="/rules-overview" prefetch={false}>
        Regler
      </Link>
    </header>
  );
}
