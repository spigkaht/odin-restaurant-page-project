const createContactPage = () => {
  const divContent = document.querySelector('#content');

  divContent.innerHTML = "";
  
  const divTitle = document.createElement('div');
  const divPara1 = document.createElement('div');

  divTitle.className = 'title';
  divPara1.className = 'para';

  divTitle.textContent = "Contact";
  divPara1.innerHTML = `
  Sausage Fest
  
  101 Main St,
  Pakenham 3810

  0359411234

  info@sausagefest.com.au
  `;

  divContent.appendChild(divTitle);
  divContent.appendChild(divPara1);
};

export { createContactPage };
