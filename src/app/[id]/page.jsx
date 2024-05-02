import Button from "@/components/Button";

export const revalidate = 1800;

export const metadata = {
  title: "Under opbygning",
  description:
    "Denne side er under opbygning, det vil i fremtiden blive en informationshylde om hver enkelte af WCAG`s regler",
};

export default async function RulesOverviewPage() {
  "use client";
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-3xl lg:text-5xl text-center ">
        Denne side er under opbygning
      </h1>
      <p className="text-lg lg:text-2xl text-center mb-8">
        Vi håber den kan være klar snart
      </p>
      <Button />
    </section>
  );
}
