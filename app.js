// Código JS reducido para el ejemplo
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

async function loadMenu(){
  const res = await fetch('menu.json');
  const data = await res.json();
  renderMenu(data);
}

function renderMenu(data){
  const container = document.getElementById('menu-container');
  container.innerHTML = '';
  data.categories.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    const title = document.createElement('h3');
    title.className = 'category-title';
    title.textContent = cat.name;
    card.appendChild(title);
    cat.items.forEach(it => {
      const item = document.createElement('div');
      item.className = 'item';
      item.innerHTML = `<div class='item-name'>${it.name}</div><div class='item-price'>ARS ${it.price}</div>`;
      card.appendChild(item);
    });
    container.appendChild(card);
  });
}
loadMenu();