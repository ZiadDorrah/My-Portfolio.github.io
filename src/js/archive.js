window.onload = function () {
  getrepos();
};
function getrepos() {
  fetch("https://api.github.com/users/ZiadDorrah/repos")
    .then((response) => response.json())
    .then((repos) => {
      var tbody = document.querySelector("tbody");
      tbody.innerHTML = "";
      repos.forEach((repo) => {
        console.log(repo);
        console.log(repo.name);
        console.log(repo.created_at);
        let tr = document.createElement("tr");
        let tdYear = document.createElement("td");
        let craetedAt = repo.created_at.split("-")[0];
        tdYear.innerHTML = craetedAt;
        tdYear.className = "year";
        tr.appendChild(tdYear);
        let tdTitle = document.createElement("td");
        tdTitle.innerHTML = repo.name;
        tdTitle.className = "title";
        tr.appendChild(tdTitle);
        let tdLink = document.createElement("td");
        tdLink.innerHTML = `<a href="${repo.clone_url}" target="_blank">
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>`;
        tdLink.className = "link";
        tr.appendChild(tdLink);
        tbody.appendChild(tr);
      });
    });
}
