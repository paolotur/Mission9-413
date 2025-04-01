type TeamProps = {
    school: string;
    name: string;
    city: string;
    state: string;
  };
  
  const TeamCard = ({ school, name, city, state }: TeamProps) => {
    return (
      <div className="team-card">
        <h2>{school}</h2>
        <p><strong>Mascot:</strong> {name}</p>
        <p><strong>Location:</strong> {city}, {state}</p>
      </div>
    );
  };
  
  export default TeamCard;
  