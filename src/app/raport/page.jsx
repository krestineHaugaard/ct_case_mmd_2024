import Link from "next/link";

import ValidationScore from "@/components/ValidationScore";

export async function generateMetadata({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const response = await fetch(
    `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`
  );
  const data = await response.json();
  return {
    title: `Raport for ${data.url}`,
    description: `Dette er en underside for den færdige raport til webaddressen ${data.url}`,
  };
}

// Revalidate route every 30 minutes
export const revalidate = 1800;

export default async function Page({ searchParams }) {
  "use client";
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const params = new URLSearchParams(searchParams);
  const response = await fetch(
    `https://mmd-a11y-api.vercel.app/api/scan?${params.toString()}`
  );
  const data = await response.json();

  return (
    <>
      <h1 className="font-libre text-3xl text-wrap text-center mx-auto lg:text-5xl">
        Report for <span className="text-brand-orange">{data.url}</span>
      </h1>
      <div className="flex flex-col justify-between items-center lg:flex-row">
        <div>
          <p className="font-libre text-xl">
            Vi fandt{" "}
            <span className="text-2xl underline">{data.violations.length}</span>{" "}
            konventions brud
          </p>
          <p className="font-libre text-xl">
            Du kan se mere om hvad det har af betydning for din hjemmeside
            nedenunder
          </p>
        </div>
        <ValidationScore data={100 - data.violations.length} />
      </div>
      {data.violations.map((v) => {
        return (
          <section
            key={v.id}
            className="bg-brand-beige-zero border-2 border-brand-yellow-100 rounded-2xl pl-12 pr-12 pb-8 pt-4 my-12"
          >
            <div className="flex gap-4 items-center">
              <h2 className="font-libre text-3xl">{v.id}</h2>
              <p className="border-2 border-brand-turquoise-50 bg-brand-turquoise-20 rounded-lg size-fit py-1 px-3">
                {v.impact === "serious" ? "Kritisk" : "Mindre kritisk"}
              </p>
            </div>
            <p>{v.description}</p>
            <p>{v.help}</p>
            <Link
              href="/id"
              prefetch={false}
              className="no-underline hover:underline underline-offset-4 decoration-brand-orange decoration-2 lg:text-lg"
            >
              Læs mere her
            </Link>
          </section>
        );
      })}
    </>
  );
}
