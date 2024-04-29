import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Image
        src="./assets/diversa.svg"
        alt="Diversa logo"
        width="200"
        height="100"
      />
      <Link href="/" prefetch={false}>
        Forside
      </Link>
      <Link href="/rules-overview" prefetch={false}>
        Regler
      </Link>
    </header>
  );
}
