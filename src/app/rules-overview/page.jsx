import Link from "next/link";

export const metadata = {
  title: "WCAG regel oversigt",
  description:
    "Her kan du dykke dybere ned i WCAG`s konventioner og hvorfor der er så vigtigt at vi benytter dem",
};

export default function RulesOverview() {
  return (
    <>
      <h1 className="font-libre  text-3xl  lg:text-5xl text-center mx-auto">
        Få styr på WCAG`s guidelines lige her
      </h1>
      <details className="border-b-2 border-brand-turquoise-20 py-6">
        <summary className="font-libre  text-lg  lg:text-2xl">Area-alt</summary>
        <p className="border-2 border-brand-turquoise-50 bg-brand-turquoise-20 rounded-lg size-fit py-1 px-3">
          Kritisk
        </p>
        <p className="lg:text-lg">
          Det er vigtigt at {"<area>"} elementer har en text der kan erstatte
          kort-billedet, hvis mu websiden ikke kan hente materialet
        </p>
        <Link
          href="/id"
          prefetch={false}
          className="no-underline hover:underline underline-offset-4 decoration-brand-orange decoration-2 lg:text-lg"
        >
          Læs mere her
        </Link>
      </details>
      <details className="border-b-2 border-brand-turquoise-20 py-6">
        <summary className="font-libre  text-lg  lg:text-2xl">
          Aria-allowed-attr
        </summary>
        <p className="border-2 border-brand-turquoise-50 bg-brand-turquoise-20 rounded-lg size-fit py-1 px-3">
          Kritisk
        </p>
        <p className="lg:text-lg">
          Sikrer, at et elements rolle understøtter dets ARIA-attributter
        </p>
        <Link
          href="/id"
          prefetch={false}
          className="no-underline hover:underline underline-offset-4 decoration-brand-orange decoration-2 lg:text-lg"
        >
          Læs mere her
        </Link>
      </details>
      <details className="border-b-2 border-brand-turquoise-20 py-6">
        <summary className="font-libre  text-lg  lg:text-2xl">
          Aria-braillle-equivalent
        </summary>
        <p className="border-2 border-brand-turquoise-50 bg-brand-turquoise-20 rounded-lg size-fit py-1 px-3">
          Alvorlig
        </p>
        <p className="lg:text-lg">
          Sørg for, at aria-braillelabel og aria-brailleroledescription har en
          ikke-braille-ækvivalent
        </p>
        <Link
          href="/id"
          prefetch={false}
          className="no-underline hover:underline underline-offset-4 decoration-brand-orange decoration-2 lg:text-lg"
        >
          Læs mere her
        </Link>
      </details>
      <details className="border-b-2 border-brand-turquoise-20 py-6">
        <summary className="font-libre  text-lg  lg:text-2xl">
          Aria-command-name
        </summary>
        <p className="border-2 border-brand-turquoise-50 bg-brand-turquoise-20 rounded-lg size-fit py-1 px-3">
          Alvorlig
        </p>
        <p className="lg:text-lg">
          Sikrer at hver ARIA-knap, link og menuitem har et tilgængeligt navn
        </p>
        <Link
          href="/id"
          prefetch={false}
          className="no-underline hover:underline underline-offset-4 decoration-brand-orange decoration-2 lg:text-lg"
        >
          Læs mere her
        </Link>
      </details>
      <details className="border-b-2 border-brand-turquoise-20 py-6">
        <summary className="font-libre  text-lg  lg:text-2xl">
          Aria-conditional-attr
        </summary>
        <p className="border-2 border-brand-turquoise-50 bg-brand-turquoise-20 rounded-lg size-fit py-1 px-3">
          Alvorlig
        </p>
        <p className="lg:text-lg">
          Sikrer, at ARIA-attributter bruges som beskrevet i specifikationen af
          elementets rolle
        </p>
        <Link
          href="/id"
          prefetch={false}
          className="no-underline hover:underline underline-offset-4 decoration-brand-orange decoration-2 lg:text-lg"
        >
          Læs mere her
        </Link>
      </details>
      <details className="border-b-2 border-brand-turquoise-20 py-6">
        <summary className="font-libre  text-lg  lg:text-2xl">
          Aria-deprecated-role
        </summary>
        <p className="border-2 border-brand-turquoise-50 bg-brand-turquoise-20 rounded-lg size-fit py-1 px-3">
          Mindre
        </p>
        <p className="lg:text-lg">
          Sikrer, at elementer ikke bruger forældede roller
        </p>
        <Link
          href="/id"
          prefetch={false}
          className="no-underline hover:underline underline-offset-4 decoration-brand-orange decoration-2 lg:text-lg"
        >
          Læs mere her
        </Link>
      </details>
      <details className="border-b-2 border-brand-turquoise-20 py-6">
        <summary className="font-libre  text-lg  lg:text-2xl">
          Aria-hidden-body
        </summary>
        <p className="border-2 border-brand-turquoise-50 bg-brand-turquoise-20 rounded-lg size-fit py-1 px-3">
          Kritisk
        </p>
        <p className="lg:text-lg">
          Sikrer, at {"aria-hidden=true"} ikke er til stede på dokumentets
          brødtekst.
        </p>
        <Link
          href="/id"
          prefetch={false}
          className="no-underline hover:underline underline-offset-4 decoration-brand-orange decoration-2 lg:text-lg"
        >
          Læs mere her
        </Link>
      </details>
    </>
  );
}
