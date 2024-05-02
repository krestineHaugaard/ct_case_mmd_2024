"use client";

import Button from "@/components/Button";

export default function Error() {
  return (
    <section className="flex flex-col justify-center items-center">
      <p className="text-3xl lg:text-5xl text-center">
        Hovsa, der sket en fejl
      </p>
      <p className="text-xl lg:text-3xl text-center mb-8">
        Den ønskede side kunne dsv ikke findes
      </p>
      <Button />
    </section>
  );
}
