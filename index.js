const array = [
  {
    img: "./images/camera.jpg",
    product_name: "dasl camera",
    price: "500",
    no_of_quantity: 1,
  },
  {
    img: "./images/phone.jpg",
    product_name: "google pixel",
    price: "700",
    no_of_quantity: 1,
  },
  {
    img: "./images/macbook.jpg",
    product_name: "macbook pro",
    price: "5000",
    no_of_quantity: 1,
  },
  {
    img: "./images/watch.jpg",
    product_name: "paidu watch",
    price: "700",
    no_of_quantity: 1,
  },
];

let arr = [];

array.map((v, i) => {
  document.getElementById("display_item").innerHTML += `<div class="item">
            <div class="item_img">
              <img src="${v.img}" alt="camera" />
            </div>
            <div class="item_detail">
              <h2>${v.product_name}</h2>
              <p>price: ${v.price}</p>
                <button class="add-btn" onclick="item_add(${i})">Add to cart</button>
            </div>
          </div>`;
});

const display = () => {
  document.getElementById("display").style.display = "none";
};
display();

const display_cart = () => {
  document.getElementById("display").style.display = "block";
  product_data();
};

const item_add = (i) => {
  if (!arr.includes(array.at(i))) {
    arr.push(array.at(i));
    document.getElementById("item_count").innerHTML = arr.length;
    document.getElementById("error").innerHTML = "";
    product_data();
  } else {
    document.getElementById("error").innerHTML = "Items already exists in cart";
  }
};

const product_data = () => {
  let str = "",
    total = 0;

  document.getElementById("total_count").innerText = "Total :" + total;
  arr.map((v, i) => {
    total_price = v.no_of_quantity * v.price;
    str += `<div class="cart_data">
                <img src="${v.img}" alt="camera" />
                <div class="head">${v.product_name}</div>
                <p>price: ${v.price}</p>
                <div class="price">Total Price: ${v.no_of_quantity} * ${v.price} = ${total_price}</div>
                <div class="btn-cart_item">
                  <button class="btn-item" onclick="decrease(${i})">-</button>
                  <button class="btn-item" onclick="delete_item(${i})">Delete</button>
                  <button class="btn-item" onclick="increase(${i})">+</button>
                </div>
            </div>`;
    total += total_price;
  });
  document.getElementById("product_card").innerHTML = str;
  document.getElementById("total_count").innerText = "Total :" + total;
};

const close_cart = () => {
  display();
};

const delete_item = (i) => {
  arr.splice(i, 1);
  product_data();
  document.getElementById("item_count").innerHTML = arr.length;
};

const increase = (i) => {
  arr[i].no_of_quantity = arr[i].no_of_quantity + 1;
  product_data();
};

const decrease = (i) => {
  if (arr[i].no_of_quantity > 1) {
    arr[i].no_of_quantity = arr[i].no_of_quantity - 1;
    product_data();
  }
};
