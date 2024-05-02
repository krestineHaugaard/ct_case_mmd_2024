"use client";

import Button from "@/components/Button";

export default function Error() {
  return (
    <section>
      <p className="text-3xl lg:text-5xl text-center mx-auto">
        Hovsa, der sket en fejl
      </p>
      <p className="text-xl lg:text-3xl text-center mx-auto">
        Vores server driller og kunne desvære ikke færdig gøre raporten, men du
        kan altid gå tilbage og prøve igen, eller vente lidt
      </p>
      <Button />
    </section>
  );
}
