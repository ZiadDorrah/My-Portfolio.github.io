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
//Button Scroll
let mybutton = document.getElementById("btn-back-to-top");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
