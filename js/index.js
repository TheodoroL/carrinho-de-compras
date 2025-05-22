//lista de produtos
const products = [
    {
        id: 1,
        name: "Teclado Mecânico",
        category: "Periféricos",
        price: 650.00,
        image: "./images/teclado-mecanico.jpg",
        quantity: 2
    },
    {
        id: 2,
        name: "Cacdeira Gamer",
        category: "Acessório",
        price: 1000.00,
        image: "./images/cadeira-gamer.jpg",
        quantity: 1
    },
    {
        id: 3,
        name: "Headset",
        category: "Periféricos",
        price: 500.00,
        image: "./images/headset.jpg",
        quantity: 1
    }
]

const cartItemSection = document.querySelector("#card-items");
function renderCartItems() {
    products.forEach(product => {
        const row = document.createElement("tr");
        const itemTotal = product.price * product.quantity;
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
    <td>R$ ${itemTotal.toFixed(2)}</td>
      <td>
        <button class="remove" onclick="removeProduct(${product.id})">
          <i class="bx bx-x"></i>
        </button>
      </td>
      </td>
    `
        cartItemSection.appendChild(row);
    });

}
//Executar um código assim que o HTML da página for completamente carregado e analisado pelo navegador, antes do carregamento completo de imagens, estilos e outros recursos externos.
document.addEventListener("DOMContentLoaded", renderCartItems);