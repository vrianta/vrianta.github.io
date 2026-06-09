// Footer year
document.getElementById("year").innerText = new Date().getFullYear();

// GitHub repos
fetch("https://api.github.com/users/vrianta/repos")
  .then(res => {
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
  })
  .then(repos => {
    const grid = document.getElementById("repoGrid");

    if (!Array.isArray(repos) || repos.length === 0) {
      console.warn("No repos returned from GitHub API");
      return;
    }

    repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6)
      .forEach(repo => {
        const a = document.createElement("a");
        a.href = repo.html_url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.className = "repo-link";

        const div = document.createElement("div");
        div.className = "repo";
        div.innerHTML = `
          <h4>${repo.name}</h4>
          <p>${repo.description || "No description provided."}</p>
          <small>⭐ ${repo.stargazers_count} • ${repo.language || "N/A"}</small>
        `;
        
        a.appendChild(div);
        grid.appendChild(a);
      });
  })
  .catch(error => {
    console.error("Failed to fetch repos:", error);
    const grid = document.getElementById("repoGrid");
    grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #94a3b8;">Unable to load repositories. Please visit <a href="https://github.com/vrianta" target="_blank" style="color: #38bdf8;">GitHub</a> directly.</p>';
  });
