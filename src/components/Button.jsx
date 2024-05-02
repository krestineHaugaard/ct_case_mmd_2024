import Link from "next/link";

export default function Button() {
  return (
    <Link
      href="/"
      prefetch={false}
      className="rounded-md text-xl border-2 bg-brand-yellow-40 px-3 py-2 w-fit hover:bg-brand-yellow-100 active:bg-brand-yellow-40 focus:outline-none focus:ring focus:ring-brand-beige-10"
    >
      Tilbage til forsiden
    </Link>
  );
}
