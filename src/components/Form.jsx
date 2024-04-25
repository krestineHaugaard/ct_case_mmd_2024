export async function generateStaticParams() {}

export default async function Form() {
  return (
    <form action="/raport">
      <label htmlFor="form_url_data">
        {"Input url"}
        <input id="form_url_data" type="url" name="url" required />
      </label>
      <button>Udregn</button>
    </form>
  );
}
