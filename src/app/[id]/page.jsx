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
    <section>
      <h1 className="text-3xl lg:text-5xl text-center mx-auto">
        Denne side er under opbygning
      </h1>
      <p className="text-lg lg:text-2xl text-center mx-auto">
        Vi håber den kan være klar snart
      </p>
    </section>
  );
}
