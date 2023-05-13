import React from "react";
import "../styles/TeamMembers.css";
import teamMemberPlaceholder from "../images/persona1.jpg";

const TeamMembers = () => {
  const teamMembers = [
    { id: 1, name: "John Doe", role: "CEO" },
    { id: 2, name: "Jane Smith", role: "CTO" },
    { id: 3, name: "Michael Johnson", role: "Marketing Manager" },
  ];

  return (
    <div className="team-members">
      <h2>Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <img
              src={teamMemberPlaceholder}
              alt={member.name}
              className="team-member-image"
            />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;