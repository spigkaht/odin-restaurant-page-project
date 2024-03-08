const createMenuPage = () => {
  const divContent = document.querySelector("#content");

  divContent.innerHTML = "";

  const divTitle = document.createElement("div");
  const divPara1 = document.createElement("div");

  divTitle.className = "title";
  divPara1.className = "para";

  divTitle.textContent = "Menu";
  divPara1.innerHTML = `
  Fishsticks
  Processed fish shaped into tubes and deep fried
  $4.95
  
  Empanadas
  Pastry filled with meat and vegetables
  $6.95

  Steak Diane
  Who even knows.. It's steak and a sauce!
  $22.50
  `;

  divContent.appendChild(divTitle);
  divContent.appendChild(divPara1);
};

export { createMenuPage };
