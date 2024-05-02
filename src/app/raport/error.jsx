"use client";

import Button from "@/components/Button";

export default function Error() {
  return (
    <section className="flex flex-col justify-center items-center">
      <p className="text-3xl lg:text-5xl text-center">
        Hovsa, der sket en fejl
      </p>
      <p className="text-xl lg:text-3xl text-center mb-8">
        Vores server driller og kunne desvære ikke færdig gøre raporten, men du
        kan altid gå tilbage og prøve igen, eller vente lidt
      </p>
      <Button />
    </section>
  );
}
