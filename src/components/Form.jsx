export async function generateStaticParams() {}

export default function Form() {
  return (
    <form action="/raport" className="flex flex-col gap-4 items-center">
      <label htmlFor="form_url_data"></label>
      <input
        id="form_url_data"
        type="url"
        name="url"
        required
        className="rounded-md border-2 border-black px-3 py-2 w-72 md:w-96"
      />
      <button className="rounded-md border-2 bg-brand-yellow-40 px-3 py-2 w-fit">
        Test website
      </button>
    </form>
  );
}
