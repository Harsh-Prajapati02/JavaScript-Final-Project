// ===== Get all Tags and divs =====//
let productSection = document.getElementById("products");
let itemsCount = document.getElementById("items-count");
let watchCount1 = document.getElementById("watchCount1");
let watchCount2 = document.getElementById("watchCount2");


// ==================== FILTER Inputs ===================== //

// ===== Type Inputs =====//
let anaDigiWatches = document.getElementById("ana-digi");
let analogWatches = document.getElementById("analog");
let digitalWatches = document.getElementById("digital");

// ===== Price Inputs =====//
let priceBtw50_100 = document.getElementById("50-100");
let priceBtw100_150 = document.getElementById("100-150");
let priceBtw150_200 = document.getElementById("150-200");
let priceBtw200_250 = document.getElementById("200-250");
let priceBtw250_300 = document.getElementById("250-300");
let priceBtw300_400 = document.getElementById("300-400");
let priceBtw500_600 = document.getElementById("500-600");
let priceBtw1400_1500 = document.getElementById("1400-1500");

// ===== Color Inputs =====//
let blue = document.getElementById("blue");
let black = document.getElementById("black");
let silver = document.getElementById("silver");
let white = document.getElementById("white");
let gray = document.getElementById("gray");
let brown = document.getElementById("brown");
let green = document.getElementById("green");
let gold = document.getElementById("gold");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");

// ===== Band Material Inputs =====//
let leather = document.getElementById("leather");
let rubber = document.getElementById("rubber");
let stainlessSteel = document.getElementById("stainless-steel")


// ==================== SORT Inputs ===================== //
let sortLowToHigh = document.getElementById("low-to-high");
let sortHighToLow = document.getElementById("high-to-low");
let relevance = document.getElementById("relevance");
let bestSeller = document.getElementById("best-seller");


// ==================== GET Products ===================== //

let productData = [];
function fetchData() {
    fetch("http://localhost:3000/products").then((res) => res.json())
        .then((data) => {
            cardList(data)
            productData = data
        })
        .catch((err) => console.log(err))
}
fetchData();

function cardList(data) {
    const store = data.map((el) => singleCard(el.id, el.change, el.image, el.title, el.price, el.rate, el.count, el.color, el.description, el.code, el.bandMaterial, el.type));
    productSection.innerHTML = store.join("");
}

function singleCard(id, change, image, title, price, rate, count, color, description, code, bandMaterial, type) {
    let card = `
    <a data-id="${id}" href="description.html?
    id=${encodeURIComponent(id)} 
    &title=${encodeURIComponent(title)}
    &image=${encodeURIComponent(image)}
    &change=${encodeURIComponent(change)}
    &price=${encodeURIComponent(price)}
    &rate=${encodeURIComponent(rate)}
    &count=${encodeURIComponent(count)}
    &color=${encodeURIComponent(color)}
    &description=${encodeURIComponent(description)}
    &code=${encodeURIComponent(code)}
    &bandMaterial=${encodeURIComponent(bandMaterial)}
    &type=${encodeURIComponent(type)}" 
    class="product col-6 d-flex flex-column align-items-center col-sm-4 col-md-3" style="text-decoration: none; color: #000;">
        <span href="" style="z-index: -1">${change}</span>
        <div class="product-img mb-3">
            <img src=${image}
            alt="">
        </div>
        <h4 class="mb-3" href="">${title}</h4>
        <h5 class="mb-3">$${price}.00</h5>
        <div class="d-flex align-items-center">
            <p>${rate}</p>
            <h6 class="mb-0 ps-1">(${count})</h6>
        </div>
    </a>
    `
    return card
}

// function singleCard(id, change, image, title, price, rate, count) {
//     let watch = `
//     <div data-id="${id}" class="product col-6 d-flex flex-column align-items-center col-sm-4 col-md-3">
//         <a href="" style="z-index: -1">${change}</a>
//         <div class="product-img mb-3">
//             <img src=${image} alt="">
//         </div>
//         <h5 class="mb-3" href="">${title}</h5>
//         <h6 class="mb-3">$${price}.00</h6>
//         <p>
//             ${rate}
//             <span>(${count})</span>
//         </p>  
//     </div>
//     `
//     return watch
// }

// ==================== FILTER Products ===================== //

// ======= FILTER Based on Type ===== //
// Ana-Digi Watches
anaDigiWatches.addEventListener('change', function () {
    if (this.checked) {
        let filterProducts = productData.filter((el) => {
            return el.type === "ana-digi"
        })
        cardList(filterProducts);
        itemsCount.innerText = filterProducts.length;
        watchCount1.innerText = filterProducts.length;
        watchCount2.innerText = filterProducts.length;
    } else {
        cardList(productData);
    }
})

// Analog Watches
analogWatches.addEventListener('change', function () {
    if (this.checked) {
        let filterProducts = productData.filter((el) => {
            return el.type === "analog"
        })
        cardList(filterProducts);
        itemsCount.innerText = filterProducts.length;
        watchCount1.innerText = filterProducts.length;
        watchCount2.innerText = filterProducts.length;
    } else {
        cardList(productData);
    }
})

// Digital Watches
digitalWatches.addEventListener('change', function () {
    if (this.checked) {
        let filterProducts = productData.filter((el) => {
            return el.type === "digital"
        })
        cardList(filterProducts);
        itemsCount.innerText = filterProducts.length;
        watchCount1.innerText = filterProducts.length;
        watchCount2.innerText = filterProducts.length;
    } else {
        cardList(productData);
    }
})


//======= FILTER Based on Price =====//
// Price Between 50 and 100
priceBtw50_100.addEventListener('change', function () {
    if (this.checked) {
        let filterProducts = productData.filter((el) => {
            return 50 <= el.price && el.price <= 100
        })
        cardList(filterProducts);
        itemsCount.innerText = filterProducts.length;
        watchCount1.innerText = filterProducts.length;
        watchCount2.innerText = filterProducts.length;
    } else {
        cardList(productData);
    }
})

// Price Between 100 and 150
priceBtw100_150.addEventListener('change', function () {
    if (this.checked) {
        let filterProducts = productData.filter((el) => {
            return 100 <= el.price && el.price <= 150
        })
        cardList(filterProducts);
        itemsCount.innerText = filterProducts.length;
        watchCount1.innerText = filterProducts.length;
        watchCount2.innerText = filterProducts.length;
    } else {
        cardList(productData);
    }
})

// Price Between 150 and 200
priceBtw150_200.addEventListener('change', function () {
    if (this.checked) {
        let filterProducts = productData.filter((el) => {
            return 150 <= el.price && el.price <= 200
        })
        cardList(filterProducts);
        itemsCount.innerText = filterProducts.length;
        watchCount1.innerText = filterProducts.length;
        watchCount2.innerText = filterProducts.length;
    } else {
        cardList(productData);
    }
})

// Price Between 200 and 250
priceBtw200_250.addEventListener('change', function () {
    if (this.checked) {
        let filterProducts = productData.filter((el) => {
            return 200 <= el.price && el.price <= 250
        })
        cardList(filterProducts);
        itemsCount.innerText = filterProducts.length;
        watchCount1.innerText = filterProducts.length;
        watchCount2.innerText = filterProducts.length;
    } else {
        cardList(productData);
    }
})

// Price Between 250 and 300
priceBtw250_300.addEventListener('change', function () {
    if (this.checked) {
        let filterProducts = productData.filter((el) => {
            return 250 <= el.price && el.price <= 300
        })
        cardList(filterProducts);
        itemsCount.innerText = filterProducts.length;
        watchCount1.innerText = filterProducts.length;
        watchCount2.innerText = filterProducts.length;
    } else {
        cardList(productData);
    }
})

// Price Between 300 and 400
priceBtw300_400.addEventListener('change', function () {
    if (this.checked) {
        let filterProducts = productData.filter((el) => {
            return 300 <= el.price && el.price <= 400
        })
        cardList(filterProducts);
        itemsCount.innerText = filterProducts.length;
        watchCount1.innerText = filterProducts.length;
        watchCount2.innerText = filterProducts.length;
    } else {
        cardList(productData);
    }
})

// Price Between 500 and 600
priceBtw500_600.addEventListener('change', function () {
    if (this.checked) {
        let filterProducts = productData.filter((el) => {
            return 500 <= el.price && el.price <= 600
        })
        cardList(filterProducts);
        itemsCount.innerText = filterProducts.length;
        watchCount1.innerText = filterProducts.length;
        watchCount2.innerText = filterProducts.length;
    } else {
        cardList(productData);
    }
})

// Price Between 1400 and 1500
priceBtw1400_1500.addEventListener('change', function () {
    if (this.checked) {
        let filterProducts = productData.filter((el) => {
            return 1400 <= el.price && el.price <= 1500
        })
        cardList(filterProducts);
        itemsCount.innerText = filterProducts.length;
        watchCount1.innerText = filterProducts.length;
        watchCount2.innerText = filterProducts.length;
    } else {
        cardList(productData);
    }
})


//======= FILTER Based on Color =====//
// Blue Color
blue.addEventListener('change', function () {
    if (this.checked) {
        let filterProducts = productData.filter((el) => {
            return el.color === "blue"
        })
        cardList(filterProducts);
        itemsCount.innerText = filterProducts.length;
        watchCount1.innerText = filterProducts.length;
        watchCount2.innerText = filterProducts.length;
    } else {
        cardList(productData);
    }
})

// Black Color
black.addEventListener('change', function () {
    if (this.checked) {
        let filterProducts = productData.filter((el) => {
            return el.color === "black"
        })
        cardList(filterProducts);
        itemsCount.innerText = filterProducts.length;
        watchCount1.innerText = filterProducts.length;
        watchCount2.innerText = filterProducts.length;
    } else {
        cardList(productData);
    }
})

// Silver Color
silver.addEventListener('change', function () {
    if (this.checked) {
        let filterProducts = productData.filter((el) => {
            return el.color === "silver"
        })
        cardList(filterProducts);
        itemsCount.innerText = filterProducts.length;
        watchCount1.innerText = filterProducts.length;
        watchCount2.innerText = filterProducts.length;
    } else {
        cardList(productData);
    }
})

// White Color
white.addEventListener('change', function () {
    if (this.checked) {
        let filterProducts = productData.filter((el) => {
            return el.color === "white"
        })
        cardList(filterProducts);
        itemsCount.innerText = filterProducts.length;
        watchCount1.innerText = filterProducts.length;
        watchCount2.innerText = filterProducts.length;
    } else {
        cardList(productData);
    }
})

// Gray Color
gray.addEventListener('change', function () {
    if (this.checked) {
        let filterProducts = productData.filter((el) => {
            return el.color === "gray"
        })
        cardList(filterProducts);
        itemsCount.innerText = filterProducts.length;
        watchCount1.innerText = filterProducts.length;
        watchCount2.innerText = filterProducts.length;
    } else {
        cardList(productData);
    }
})

// Brown Color
brown.addEventListener('change', function () {
    if (this.checked) {
        let filterProducts = productData.filter((el) => {
            return el.color === "brown"
        })
        cardList(filterProducts);
        itemsCount.innerText = filterProducts.length;
        watchCount1.innerText = filterProducts.length;
        watchCount2.innerText = filterProducts.length;
    } else {
        cardList(productData);
    }
})

// Green Color
green.addEventListener('change', function () {
    if (this.checked) {
        let filterProducts = productData.filter((el) => {
            return el.color === "green"
        })
        cardList(filterProducts);
        itemsCount.innerText = filterProducts.length;
        watchCount1.innerText = filterProducts.length;
        watchCount2.innerText = filterProducts.length;
    } else {
        cardList(productData);
    }
})

// Gold Color
gold.addEventListener('change', function () {
    if (this.checked) {
        let filterProducts = productData.filter((el) => {
            return el.color === "gold"
        })
        cardList(filterProducts);
        itemsCount.innerText = filterProducts.length;
        watchCount1.innerText = filterProducts.length;
        watchCount2.innerText = filterProducts.length;
    } else {
        cardList(productData);
    }
})

// Red Color
red.addEventListener('change', function () {
    if (this.checked) {
        let filterProducts = productData.filter((el) => {
            return el.color === "red"
        })
        cardList(filterProducts);
        itemsCount.innerText = filterProducts.length;
        watchCount1.innerText = filterProducts.length;
        watchCount2.innerText = filterProducts.length;
    } else {
        cardList(productData);
    }
})

// Yellow Color
yellow.addEventListener('change', function () {
    if (this.checked) {
        let filterProducts = productData.filter((el) => {
            return el.color === "yellow"
        })
        cardList(filterProducts);
        itemsCount.innerText = filterProducts.length;
        watchCount1.innerText = filterProducts.length;
        watchCount2.innerText = filterProducts.length;
    } else {
        cardList(productData);
    }
})


//======= FILTER Based on Band Material =====//
// Leather Band
leather.addEventListener('change', function () {
    if (this.checked) {
        let filterProducts = productData.filter((el) => {
            return el.bandMaterial === "leather"
        })
        cardList(filterProducts);
        itemsCount.innerText = filterProducts.length;
        watchCount1.innerText = filterProducts.length;
        watchCount2.innerText = filterProducts.length;
    } else {
        cardList(productData);
    }
})

// Rubber Band
rubber.addEventListener('change', function () {
    if (this.checked) {
        let filterProducts = productData.filter((el) => {
            return el.bandMaterial === "rubber"
        })
        cardList(filterProducts);
        itemsCount.innerText = filterProducts.length;
        watchCount1.innerText = filterProducts.length;
        watchCount2.innerText = filterProducts.length;
    } else {
        cardList(productData);
    }
})

// Stainless-Steel Band
stainlessSteel.addEventListener('change', function () {
    if (this.checked) {
        let filterProducts = productData.filter((el) => {
            return el.bandMaterial === "stainless-steel"
        })
        cardList(filterProducts);
        itemsCount.innerText = filterProducts.length;
        watchCount1.innerText = filterProducts.length;
        watchCount2.innerText = filterProducts.length;
    } else {
        cardList(productData);
    }
})


// ==================== SORT Products ===================== //

// relevance.addEventListener("click", () => {
//     cardList(productData);
// })

// bestSeller.addEventListener("click", () => {
//     cardList(productData);
// })

//======= SORT Low To High =====//
sortLowToHigh.addEventListener("click", () => {
    const sortData = productData.sort((a, b) => a.price - b.price);
    cardList(sortData);
    itemsCount.innerText = sortData.length;
    watchCount1.innerText = sortData.length;
    watchCount2.innerText = sortData.length;
})

//======= SORT High To Low =====//
sortHighToLow.addEventListener("click", () => {
    const sortData = productData.sort((a, b) => b.price - a.price);
    cardList(sortData);
    itemsCount.innerText = sortData.length;
    watchCount1.innerText = sortData.length;
    watchCount2.innerText = sortData.length;
})