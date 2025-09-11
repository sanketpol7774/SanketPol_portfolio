import { useEffect, useState } from "react";


function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/sanketpol7774/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div className="slider">
        <div className="slider-track">
          {repos.map((repo) => (
            <div key={repo.id} className="card">
              <img
                src={`https://picsum.photos/seed/${repo.id}/400/225`}
                alt={repo.name}
              />
              <h3>{repo.name}</h3>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                View Demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;




