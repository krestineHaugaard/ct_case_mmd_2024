"use client";

export default function Page({ searchParams }) {
  const data = new URLSearchParams(searchParams);

  return (
    <main>
      <h1>{data}</h1>
      <h2>Something went wrong</h2>
      <p>Something went wrong when composing your report, please try again</p>
    </main>
  );
}
