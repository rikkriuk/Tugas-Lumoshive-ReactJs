let users = [];
const api = "https://randomuser.me/api";
const result = 1000;
let page = 1;

let pageNumber = document.querySelector(".page-number");
pageNumber.textContent = page;

const getData = async (apiTypeResponse) => {
  document.querySelector(".loading").style.display = "flex";
  document.querySelector(".container").style.display = "none";

  let data = null;
  if (apiTypeResponse === "all") {
    const response = await fetch(`${api}?results=${result}`);
    data = await response.json();
  }

  if (apiTypeResponse === "page") {
    const response = await fetch(`${api}?results=10&page=${page}`);
    data = await response.json();
  }

  document.querySelector(".loading").style.display = "none";
  document.querySelector(".container").style.display = "grid";
  return data.results;
};

const displayUsers = async (users) => {
  const userContainer = document.querySelector(".container");
  userContainer.innerHTML = "";

  users.map((user) => {
    const userCard = document.createElement("div");
    userCard.classList.add("list-item");

    userCard.innerHTML = `
            <img
               src="${user.picture.large}"
               alt="${user.name.first}">

            <div class="about-person">
               <h2>${user.name.first} ${user.name.last}</h2>
               <p>${user.email}</p>
               <p>${user.location.city}, ${user.location.state}</p>
            </div>
      `;

    userContainer.appendChild(userCard);
  });
};

const getDefaultData = async () => {
  users = await getData("page");
  displayUsers(users);
};

getDefaultData();

const searchItem = async () => {
  const searchInput = document.getElementById("search-input");
  const searchQuery = searchInput.value.toLowerCase();
  users = await getData("all");

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
    return fullName.includes(searchQuery);
  });

  if (filteredUsers.length === 0) {
    alert("No user found");
  } else {
    displayUsers(filteredUsers);
  }
};

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchItem();
});

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
prevBtn.addEventListener("click", async () => {
  if (page > 1) {
    page--;
    pageNumber.textContent = page;
    users = await getData("page");
    displayUsers(users);
  }
});

nextBtn.addEventListener("click", async () => {
  page++;
  pageNumber.textContent = page;
  users = await getData("page");
  displayUsers(users);
});
