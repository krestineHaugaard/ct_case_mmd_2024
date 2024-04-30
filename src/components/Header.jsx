import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <Image
        src="./assets/diversa.svg"
        alt="Diversa logo"
        width="200"
        height="100"
      />
      <div className="space-x-4">
        <Link
          href="/"
          prefetch={false}
          className="no-underline hover:underline underline-offset-4 decoration-black decoration-2"
        >
          Forside
        </Link>

        <Link
          href="/rules-overview"
          prefetch={false}
          className="no-underline hover:underline underline-offset-4 decoration-black decoration-2"
        >
          Regler
        </Link>
      </div>
    </header>
  );
}
