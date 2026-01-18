// Footer year
document.getElementById("year").innerText = new Date().getFullYear();

// GitHub repos
fetch("https://api.github.com/users/vrianta/repos")
  .then(res => res.json())
  .then(repos => {
    const grid = document.getElementById("repoGrid");

    repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6)
      .forEach(repo => {
        const div = document.createElement("div");
        div.className = "repo";
        div.innerHTML = `
          <h4>${repo.name}</h4>
          <p>${repo.description || "No description provided."}</p>
          <small>⭐ ${repo.stargazers_count} • ${repo.language || "N/A"}</small>
        `;
        grid.appendChild(div);
      });
  });
