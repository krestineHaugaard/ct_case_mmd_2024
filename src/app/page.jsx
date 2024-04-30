import Form from "@/components/Form";

export default function Home() {
  return (
    <main>
      <h1>Lever din hjemmeside op til WCAG`s konventioner?</h1>
      <p>
        En hjemmeside er ikke bare en hjemmeside, den skal også overholde nogel
        regler der sikre at indholdet loader optimalt, samt at dine besøgene
        nemt kan navigere rundt og få den information de søger.
      </p>
      <p>
        Her har du mulig for at teste din hjemmeside i forhold til WCAG`s
        guidelines. Indtast din webadresse herunder og få en rapport personligt
        udregnet til dig.
      </p>
      <Form />
    </main>
  );
}
