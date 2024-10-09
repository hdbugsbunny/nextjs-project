import { getTrainings } from "@/lib/training";

export default async function TrainingPage() {
  const trainingSessions = await getTrainings();

  return (
    <main>
      <h1>Find Your Favorite Activity!</h1>
      <ul id="training-sessions">
        {trainingSessions.map((training) => (
          <li key={training.id}>
            <img src={`/trainings/${training.image}`} alt={training.title} />
            <div>
              <h2>{training.title}</h2>
              <p>{training.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}