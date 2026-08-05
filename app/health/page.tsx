async function getHealthData() {
  const start = Date.now();

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
      cache: "no-store",
    });

    const latency = Date.now() - start;

    return {
      api: res.ok ? "Online" : "Offline",
      latency,
      environment: process.env.NODE_ENV,
      timestamp: new Date().toLocaleString(),
    };
  } catch {
    return {
      api: "Offline",
      latency: null,
      environment: process.env.NODE_ENV,
      timestamp: new Date().toLocaleString(),
    };
  }
}

export default async function Health() {
  const health = await getHealthData();

  const services = [
    {
      name: "Portfolio Website",
      status: "Online",
    },
    {
      name: "AI Chat",
      status: "Online",
    },
    {
      name: "External API",
      status: health.api,
    },
    {
      name: "Deployment",
      status: "Running",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold">System Health</h1>

      <p className="mt-2 text-gray-500">
        Current status of Nishan Shetty's portfolio services.
      </p>

      <div className="mt-10 space-y-4">
        {services.map((service) => (
          <div
            key={service.name}
            className="flex items-center justify-between rounded-xl border p-5 shadow-sm"
          >
            <div>
              <h2 className="font-semibold">{service.name}</h2>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-sm font-medium ${
                service.status === "Online" ||
                service.status === "Running"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {service.status}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">
          System Information
        </h2>

        <div className="space-y-2 text-sm">
          <p>
            <strong>Environment:</strong> {health.environment}
          </p>

          <p>
            <strong>API Latency:</strong>{" "}
            {health.latency ? `${health.latency} ms` : "Unavailable"}
          </p>

          <p>
            <strong>Last Checked:</strong> {health.timestamp}
          </p>

          <p>
            <strong>Framework:</strong> Next.js 16
          </p>

          <p>
            <strong>Runtime:</strong> React + TypeScript
          </p>
        </div>
      </div>
    </main>
  );
}