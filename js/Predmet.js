/*

const wrapper = document.querySelector('.Predmet');
let productsData = [];

getProducts();

async function getProducts() {
    const res = await fetch('../products.json');
    productsData = await res.json();
    loadProductDetails(productsData);
}


function getParameterFromURL(parameter) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(parameter);
}


function loadProductDetails(data) {
    const productId = Number(getParameterFromURL('id'));
    const findProduct = data.find(card => card.id === productId);
    renderInfoProduct(findProduct);
}

function renderInfoProduct(product) {
    const { img, title, descr } = product;
    const productItem = 
    `
    <div class="column" data-product-id="${id}>
            <a href="/html/card.html?id=${id}"><button class="cube"> 
                <div class="cubeCon"> 
                    <div class="cubeImg"> 
                        <img src="/images/${img}"/>
                    </div>
                    <div class="cubeText"> 
                        <h4> ${title} </h4>
                    </div>
                </div>
            </button></a>
        </div>
    `
    wrapper.insertAdjacentHTML('beforeend', productItem);
}

*/

const cards = document.querySelector('.profile-container1');
let productsData = [];

// Загрузка товаров
getProducts()

// Получение товаров
async function getProducts() {

    if (!productsData.length) {
        const res = await fetch('../temy.json');
        productsData = await res.json();
    }
    renderStartPage(productsData)
   
}

function renderStartPage(data) {
    const arrCards = data.slice(0, 100);
    createCards(arrCards);
}

// Рендер карточки
function createCards(data) {
    data.forEach(card => {
        const { id, img, title} = card;
		const cardItem = 
        `
        <button class="column" data-product-id="${id}"> 
            <div class="cubeCon"> 
                <div class="cubeImg"> 
                    <img src="/images/${img}"/>
                </div>
                <div class="cubeText"> 
                <a href="/html/Tema.html?id=${id}"<h4> ${title} </h4></a>
                </div>
            </div>
        </button>
        
        `
        cards.insertAdjacentHTML('beforeend', cardItem);
	});
}