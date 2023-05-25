function toggle() {
  var x = document.getElementById("cart-container");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const product = [
  {
    id: 0,
    image: "../img/04.jpeg",
    title: "jacket",
    price: 45000,
  },
  {
    id: 1,
    image: "../img/suit.jpg",
    title: "suit",
    price: 200000,
  },
  {
    id: 2,
    image: "../img/cap.jpg",
    title: "Hat",
    price: 22000,
  },
  {
    id: 3,
    image: "../img/fulloutfit.jpg",
    title: "t-shirt",
    price: 150000,
  },
  {
    id: 4,
    image: "../img/shirt.jpg",
    title: "t-shirt",
    price: 15000,
  },
  {
    id: 4,
    image: "../img/beachshort.jpg",
    title: "t-shirt",
    price: 25000,
  },
  {
    id: 4,
    image: "../img/beachoutfit.jpg",
    title: "t-shirt",
    price: 35000,
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];

let i = 0;
document.getElementById("product-container").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return `<div class= 'box'>
           <div class='img-box'>
              <img class='images' src=${image} alt='picture'></img>
           </div>
           <div class='bottom'>
             <p>${title}</p>
             <h2>tsh ${price}.00</h2>` + 
             "<button onclick='addtocart("+(i++)+")'> Add to Cart </button>"+
             `</div>
           </div>`;
  })
  .join("");

var cart = [];

function addtocart(a) {
  console.log({...categories[a]})
  cart.push({...categories[a]});
  displaycart();
}

function delElement(a){
  cart.splice(a, 1);
  displaycart();
}

window.onload = function () {
  displaycart();
};

function displaycart(a) {
  let j = 0, total=0;
  document.getElementById("badge").innerHTML = cart.length

  if (cart.length === 0) {
    console.log(true);
    document.getElementById("cart-item").innerHTML = "Your cart is empty!!";
    document.getElementById("total").innerHTML = "Tsh"+0+ ".00";
  } else {
    document.getElementById("cart-item").innerHTML = cart
      .map((item) => {
        var { image, title, price } = item;
        total= total+price;
        document.getElementById("total").innerHTML = "Tsh" +total+ ".00";
        return (
          `<div class="cart-product">
             <div class="row-img">
                <img class="img" src=${image}>
                </div>
                <div class="info">                
                <p>${title}<p>
                <h2>Tsh ${price}</h2>
                </div>` +
                " <div class='delete-btn'><i class='fa fa-trash' onclick='delElement("+(j++) +")'></i></div></div>"
        );
      })
      .join("");
  }
}
