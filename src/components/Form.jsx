export async function generateStaticParams() {}

export default function Form() {
  return (
    <form action="/raport">
      <label htmlFor="form_url_data">Indtast webadresse her</label>
      <input id="form_url_data" type="url" name="url" required />
      <button>Test website</button>
    </form>
  );
}
