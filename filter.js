const players = ["Dhoni", "Sachin", "Sourav", "kohli"];
const divRef = document.querySelector("#list");

function prepareList(data) {
  const playersStr = data
    .map((val) => {
      return `<li> ${val} </li>`;
    })
    .join("");
  const list = `<ul>${playersStr}</ul>`;
  divRef.innerHTML = list;
}

function handleChange(eve) {
  const value = eve.target.value;

  const filteredPlayers = players.filter(function (val) {
    return val.toLowerCase().startsWith(value.toLowerCase());
  });
  prepareList(filteredPlayers);
}
prepareList(players);
