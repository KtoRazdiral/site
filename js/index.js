const cards = document.querySelector('.column');
let productsData = [];

// Загрузка товаров
getProducts()

// Получение товаров
async function getProducts() {

    if (!productsData.length) {
        const res = await fetch('../products.json');
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
        const { id, img, title } = card;
		const cardItem = 
        `
        <button class="column" data-product-id="${id}"> 
            <div class="cubeCon"> 
                <div class="cubeImg"> 
                    <img src="/images/${img}"/>
                </div>
                <div class="cubeText"> 
                <a href="/html/Predmet.html?id=${id}"<h4> ${title} </h4></a>
                </div>
            </div>
        </button>
        
        `
        cards.insertAdjacentHTML('beforeend', cardItem);
	});
}


/*
`
<button class="cube" data-product-id="${id}"> 
    <div class="cubeCon"> 
        <div class="cubeImg"> 
            <img src="/images/${img}"/>
        </div>
        <div class="cubeText"> 
        <a href="/Predmet.html?id=${id}"<h4> ${title} </h4></a>
        </div>
    </div>
</button>

`
*/
