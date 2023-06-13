window.addEventListener('DOMContentLoaded', (event) => {
    const itemList = document.getElementById('item-list');
    const addItemButton = document.getElementById('add-item-button');
    const addItemForm = document.getElementById('add-item-form');
    const itemForm = document.getElementById('item-form');
    const cancelButton = document.getElementById('cancel-button');
  
    let items = [];
  
    addItemButton.addEventListener('click', () => {
      addItemForm.classList.remove('hidden');
    });
  
    cancelButton.addEventListener('click', () => {
      addItemForm.classList.add('hidden');
    });
  
    itemForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const itemName = document.getElementById('item-name').value;
      const itemPrice = document.getElementById('item-price').value;
  
      if (itemName && itemPrice) {
        const newItem = {
          name: itemName,
          price: parseFloat(itemPrice),
        };
  
        items.push(newItem);
        renderItems();
        resetForm();
      }
    });
  
    itemList.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
        const itemName = event.target.dataset.name;
        removeItem(itemName);
      }
    });
  
    function renderItems() {
      itemList.innerHTML = '';
  
      items.forEach((item) => {
        const li = document.createElement('li');
        const removeButton = document.createElement('button');
  
        removeButton.innerText = 'Remove';
        removeButton.dataset.name = item.name;
  
        li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        li.appendChild(removeButton);
  
        itemList.appendChild(li);
      });
    }
  
    function removeItem(itemName) {
      items = items.filter((item) => item.name !== itemName);
      renderItems();
    }
  
    function resetForm() {
      document.getElementById('item-name').value = '';
      document.getElementById('item-price').value = '';
      addItemForm.classList.add('hidden');
    }
  });
  