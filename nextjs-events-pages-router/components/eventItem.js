import Link from "next/link";

export default function EventItem(props) {
  const { id, title, location, date, image } = props.event;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const formattedImage = `/${image}`;
  const formattedLink = `/events/${id}`;

  return (
    <li key={id}>
      <img src={formattedImage} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{formattedDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={formattedLink}>Explore Event!</Link>
        </div>
      </div>
    </li>
  );
}
