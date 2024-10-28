export default function LeaderCard({ leader }) {
  return (
    <div className="card">
      <img src={leader.image} alt={leader.name} />
      <h3>{leader.name}</h3>
      <p>{leader.role}</p>
    </div>
  );
}