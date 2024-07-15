const NAMES = ["Harshit", "Manuel"];

export default function Post() {
  const chosenName = Math.random() > 0.5 ? NAMES[0] : NAMES[1];

  return (
    <div>
      <p>{chosenName}</p>
      <p>React.js is Awesome!</p>
    </div>
  );
}
