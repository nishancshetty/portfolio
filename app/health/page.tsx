async function getData() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  return res.json();
}

export default async function Health() {
  const data = await getData();

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold">Health Check</h1>

      <pre className="mt-5">
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  );
}