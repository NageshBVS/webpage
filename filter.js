const players = ["Dhoni", "Sachin", "Sourav", "kohli"];
const divRef = document.querySelector("#list");

function prepareList() {
  const playersStr = players
    .map((val) => {
      return `<li> ${val} </li>`;
    })
    .join("");
  const list = `<ul>${playersStr}</ul>`;
  divRef.innerHTML = list;
}
prepareList();
