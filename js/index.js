const products = [
  {
    id: 1,
    name: "Teclado Mecânico",
    category: "Periféricos",
    price: 650.0,
    image: "./images/teclado-mecanico.jpg",
    quantity: 2
  },
  {
    id: 2,
    name: "Cacdeira Gamer",
    category: "Acessório",
    price: 1000.0,
    image: "./images/cadeira-gamer.jpg",
    quantity: 1
  },
  {
    id: 3,
    name: "Headset",
    category: "Periféricos",
    price: 700.0,
    image: "./images/headset.jpg",
    quantity: 1
  }
];

function renderCartItems() {
  const cartItemSection = document.querySelector("#card-items");
  const subTotalElement = document.querySelector("#sub-total");
  const totalElement = document.querySelector("#total");
  cartItemSection.innerHTML = "";

  let subTotal = 0;

  products.forEach(product => {
    const row = document.createElement("tr");
    const itemTotal = product.price * product.quantity;
    subTotal += itemTotal;
    row.innerHTML = `
        <td>
          <div class="product">
            <img 
              src="${product.image}" 
              height="100" 
              width="100" 
              alt="${product.name}" 
            />
            <div class="info">
              <div class="name">${product.name}</div>
              <div class="category">${product.category}</div>
            </div>
          </div>
        </td>
        <td>R$ ${product.price.toFixed(2)}</td>
        <td>
          <div class="quantity">
            <button onclick="decreaseQuantity(${product.id})">
                <i class="bx bx-minus"></i>
            </button>
            <span>${product.quantity}</span>
            <button onclick="increaseQuantity(${product.id})">
                <i class="bx bx-plus"></i>
            </button>
          </div>
        </td>
        <td>R$ ${itemTotal.toFixed(2)}</td>
        <td>
          <button class="remove" onclick="removeProduct(${product.id})">
            <i class="bx bx-x"></i>
          </button>
        </td>
    `;
    cartItemSection.appendChild(row);
  });

  totalElement.textContent = `R$ ${subTotal.toFixed(2)}`;
  subTotalElement.textContent = `R$ ${subTotal.toFixed(2)}`;
}

function increaseQuantity(productId) {
  const product = products.find(p => p.id == productId);
  if (product) {
    product.quantity++;
    renderCartItems();
  }
}

function decreaseQuantity(productId) {
  const product = products.find(p => p.id == productId);
  if (product && product.quantity > 1) {
    product.quantity--;
    renderCartItems();
  }
}


function removeProduct(productId) {
  const index = products.findIndex(product => product.id == productId);

  if (index != -1) {
    products.splice(index, 1);
    renderCartItems();
  }
}


// Chama renderização inicial
document.addEventListener("DOMContentLoaded", renderCartItems);
