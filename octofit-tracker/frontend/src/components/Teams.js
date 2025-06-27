import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://sturdy-spoon-9vj4g6vqqpcrp-8000.app.github.dev/api/teams')
      .then(res => res.json())
      .then(data => setTeams(data));
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4">Teams</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-info">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{team.name}</td>
                  <td>{team.members?.length || 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="btn btn-success mt-3">Agregar Equipo</button>
      </div>
    </div>
  );
}

export default Teams;
