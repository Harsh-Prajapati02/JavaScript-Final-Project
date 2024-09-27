let desPageTitle = document.getElementById("dec-page-title");
let descriptionChange = document.getElementById("description-change");
let descriptionTitle = document.getElementById("description-title");
let descriptionRating = document.getElementById("description-rating");
let descriptionRatingCount = document.getElementById("description-ratingCount");
let descriptionImage = document.getElementById("description-image");
let descriptionColor = document.getElementById("description-color");
let descriptionPrice = document.getElementById("description-price");
let desPathTitle = document.getElementById("des-path-title");
let description = document.getElementById("description");
let descriptionCode = document.getElementById("description-code");

// Add To Cart Button
let addToCartBtn = document.getElementById("add-to-cart");
let cartProductSection = document.getElementById("cart-products");
let cartProductCount = document.getElementById("cart-prod-count");
let cartCount = document.getElementById("cart-count");
let cartProdCountSmall = document.getElementById("cart-prod-count-small");

const param = new URLSearchParams(window.location.search);
window.addEventListener("load", () => {
    desPageTitle.innerText = `${param.get("title")}| ${param.get("color")}| ${param.get("code")}`;
    desPathTitle.innerText = param.get("title");
    descriptionChange.innerText = param.get("change");
    descriptionTitle.innerText = param.get("title");
    descriptionRating.innerText = param.get("rate");
    descriptionRatingCount.innerText = `[${param.get("count")}Reviews]`;
    description.innerText = param.get("description");
    descriptionCode.innerText = param.get("code");
    descriptionImage.src = param.get("image");
    descriptionColor.innerText = `Color ${param.get("color")}`;
    descriptionPrice.innerText = `$${param.get("price")}.00`;
})

// Data Add(POST) on Server
addToCartBtn.addEventListener("click", () => {
    let cartData = {
        title : param.get("title"),
        image : param.get("image"),
        price : param.get("price"),
        color : param.get("color")
    }
    // console.log(cartData);
    fetch("http://localhost:3000/cart", {
        method : "POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body : JSON.stringify(cartData)
    }).then((res) => res.json())
    .then((data) => {
        fetchData()
        alert("Added...")
    })
    .catch((err) => console.log(err))
})

// Data Show On Cart
function fetchData() {
    fetch("http://localhost:3000/cart")
    .then((res) => res.json())
    .then((data) => {
        cartCardList(data)
    })
    .catch((err) => console.log(err))
}
fetchData();

function cartCardList(data) {
    const store = data.map((el) => CartSingleCard(el.id, el.image, el.title, el.price, el.color));
    cartProductSection.innerHTML = store.join("");
    cartCount.innerText = store.length + " " + "items";
    cartProductCount.innerText = store.length;
    cartProdCountSmall.innerText = store.length;
}

function CartSingleCard(id, image, title, price, color) {
    let card = `
        <div class="cart-middle pt-4 pb-4 d-flex justify-content-between" style="border-bottom: 1px solid lightgray;">
            <img class="col-3" class="ms-2 me-3" src=${image} alt="">
            <div class="product-info col-9">
                <div class="d-flex justify-content-between">
                    <h6 class="mb-2">${title} - ${color}</h6>
                    <button data-id="${id}" class="btn-close text-reset"></button>
                </div>
                <span>QTY : 1</span>
                <div class="d-flex justify-content-between">
                    <p class="mb-0">Color : ${color}</p>
                    <p class="mb-0">$${price}.00</p>
                </div>
            </div>
        </div>
    `
    return card
}

// Delete Cart Data 
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("btn-close")) {
        deleteCartProduct(e.target.dataset.id)
    }
})

function deleteCartProduct(id) {
    fetch(`http://localhost:3000/cart/${id}`, {
        method : "DELETE"
    }).then((res) => res.json())
    .then((data) => {
        // console.log(data)
        alert("Deleted...")
    })
    .catch((err) => console.log(err))
}