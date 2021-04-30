let searchable = ["sulfur", "helium", "hydrogen", "oxygen", "magnesium", "gold", "iron", "aluminum", "platinum", "silver", "silicon", "neon", "zinc", "lithium", "phosphours", "carbon", "xenon", "sodium", "boron", "argon"];

const searchInput = document.getElementById("search");
const searchWrapper = document.querySelector(".wrapper");
const resultsWrapper = document.querySelector(".results");

searchInput.addEventListener("keyup", () => {
  let results = [];
  let input = searchInput.value;
  if (input.length) {
    resetAll();
    results = searchable.filter((item) => {
      return item.toLowerCase().startsWith(input.toLowerCase());
    });
  }

  renderResults(results);
});

function renderResults(results) {
  if (!results.length) {
    resetAll();
    searchWrapper.classList.remove("show");
    return;
  }
  let toHide = searchable.filter((m) => !results.includes(m));
  toHide.map((m) => {
    const wrapperBta3o = document.querySelector(`.${m}`);
    wrapperBta3o.classList.add("hide");
  });

  let content = results
    .map((item) => {
      return `<li>${item}</li>`;
    })
    .join("");

  searchWrapper.classList.add("show");
  resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}

function resetAll() {
  searchable.map((m) => {
    const wrapperBta3o = document.querySelector(`.${m}`);
    if (!wrapperBta3o.classList) return;
    wrapperBta3o.classList.remove("hide");
  });
}