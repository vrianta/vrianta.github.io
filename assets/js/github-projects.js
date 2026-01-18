const username = "vrianta";

const projectGrid = document.getElementById("projectGrid");
const repoCount = document.getElementById("repoCount");
const starCount = document.getElementById("starCount");
const forkCount = document.getElementById("forkCount");

let stars = 0;
let forks = 0;

fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then(repos => {

        repoCount.innerText = repos.length;

        repos
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .forEach(repo => {

                stars += repo.stargazers_count;
                forks += repo.forks_count;

                const card = document.createElement("div");
                card.className = "project-card";

                card.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "No description available."}</p>
                    <div class="project-meta">
                        <span>⭐ ${repo.stargazers_count}</span>
                        <span>🍴 ${repo.forks_count}</span>
                        <span>🧠 ${repo.language || "N/A"}</span>
                    </div>
                    <a href="${repo.html_url}" target="_blank">View Repository →</a>
                `;

                projectGrid.appendChild(card);
            });

        starCount.innerText = stars;
        forkCount.innerText = forks;
    })
    .catch(err => console.error("GitHub API error:", err));
