import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <Link
        href="/"
        prefetch={false}
        className="no-underline hover:underline underline-offset-4 decoration-brand-orange decoration-2"
      >
        <Image
          src="./assets/diversa.svg"
          alt="Diversa logo"
          width={150}
          height={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      <Link
        href="/rules-overview"
        prefetch={false}
        className="no-underline hover:underline underline-offset-4 decoration-brand-orange decoration-2 lg:text-xl"
      >
        Regel oversigt
      </Link>
    </header>
  );
}
