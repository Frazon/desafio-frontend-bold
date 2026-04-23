let currentPage = 1;
const productGrid = document.getElementById('product_grid');
const btnLoadMore = document.getElementById('btn_load_more');

async function fetchProducts(){
    try{

        const nextUrl = `https://desafio-api.bold.workers.dev/products?page=${currentPage}`;
        const response = await fetch(nextUrl);
        const data = await response.json();

        if (data.products && data.products.length > 0) {
            renderProducts(data.products);

            console.log('pag ' + currentPage, data.products);

            currentPage++;
        }

        if (!data.nextPage) {
            btnLoadMore.style.display = 'none';
        }


    } catch (error){
        console.error("Erro ao carregar produtos:", error);
    }
}


function renderProducts(products) {
    products.forEach(product => {

        const card = `
            <div class="flex-product">
                <div class="img-product">
                    <img 
                    src="${product.image}" 
                    alt="${product.name}"
                    onerror="this.onerror=null;this.src='https://placehold.co/300?text=Imagem+indispon%C3%ADvel';"
                    >
                </div>
                <div>
                    <div class="title-product">${product.name}</div>
                    <div class="description-product">${product.description}</div>
                    <div class="price-old-product">De: R$ ${product.oldPrice.toFixed(2).replace('.', ',')}</div>
                    <div class="price-current-product">Por: R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                    <div class="price-installments-product">ou ${product.installments.count}x de R$ ${product.installments.value.toFixed(2).replace('.', ',')}</div>
                    <div>
                        <button class="btn-buy-product">Comprar</button>
                    </div>
                </div>
            </div>
        `;

        productGrid.innerHTML += card;
    });
}

btnLoadMore.addEventListener('click', fetchProducts);

fetchProducts();