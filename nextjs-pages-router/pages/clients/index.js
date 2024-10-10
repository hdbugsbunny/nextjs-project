import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    { id: "harsh", name: "Harshit" },
    { id: "jake", name: "Jake" },
  ];

  return (
    <div>
      <h1>Clients Page</h1>
      <p>This is the clients page.</p>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
            {/* A Different Way of Setting Href */}
            {/* <Link
              href={{
                pathname: "/clients/[clientId]",
                query: { clientId: client.id },
              }}
            >
              {client.name}
            </Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
