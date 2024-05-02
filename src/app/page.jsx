import Form from "@/components/Form";

export const metadata = {
  title: "Test din webpage",
  description:
    "Velkommen til Diversa hvor du har mulighed for at teste dine webadresser i forhold til WCAG",
};

export default function Home() {
  return (
    <>
      <h1 className="font-libre  text-3xl  lg:text-5xl text-center mx-auto">
        Lever din hjemmeside op til WCAG`s konventioner?
      </h1>
      <p className="text-lg text-center mx-auto">
        En hjemmeside er ikke bare en hjemmeside, den skal også overholde nogen
        regler der sikre at indholdet loader optimalt, samt at dine besøgene
        nemt kan navigere rundt og få den information de søger.
      </p>
      <p className="text-lg text-center mx-auto">
        Her har du mulig for at teste din hjemmeside i forhold til WCAG`s
        guidelines. Indtast din webadresse herunder og få en rapport personligt
        udregnet til dig.
      </p>
      <Form />
    </>
  );
}
