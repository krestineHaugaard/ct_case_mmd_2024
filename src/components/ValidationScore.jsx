export default function ValidationScore(props) {
  return (
    <div className="flex flex-col flex-wrap items-center text-l mt-8 lg:mt-0">
      <article className="flex justify-center items-center rounded-full text-3xl bg-brand-turquoise-50 size-32">
        <p>{props.data}%</p>
      </article>
      <p className="w-64 text-center">
        Din hjemmesides samlede score ud af 100
      </p>
    </div>
  );
}
