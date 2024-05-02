"use client";

import Button from "@/components/Button";

export default function Error() {
  return (
    <section>
      <p className="text-3xl lg:text-5xl text-center mx-auto">
        Hovsa, der sket en fejl
      </p>
      <p className="text-xl lg:text-3xl text-center mx-auto">
        Den ønskede side kunne dsv ikke findes
      </p>
      <Button />
    </section>
  );
}
