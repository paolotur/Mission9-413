import teamsData from '../CollegeBasketballTeams.json';
import TeamCard from './TeamCard';

type Team = {
  school: string;
  name: string;
  city: string;
  state: string;
};

const TeamList = () => {
  return (
    <div className="team-list">
      {teamsData.teams.map((team: Team, index: number) => (
        <TeamCard
          key={index}
          school={team.school}
          name={team.name}
          city={team.city}
          state={team.state}
        />
      ))}
    </div>
  );
};

export default TeamList;
