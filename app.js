// variables

const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");

// cart
let cart = [];

// getting the products first locally (from json file), then from contenful
class Products {}

// display products: is getting the products from Products or local storage class and display them
class UI {}

// local storage
class Storage {}

//
document.addEventListener("DOMContentLoaded", () => {
  // instances for ui and products classes
  const ui = new UI();
  const products = new Products();
});
