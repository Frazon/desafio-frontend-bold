let nextUrl = 'https://desafio-api.bold.workers.dev/products?page=1'


async function fetchProducts(){
    try{
        const response = await fetch(nextUrl);
        const data = await response.json();

        console.log('Lista de produtos', data);

    } catch (error){
        console.error("Erro ao carregar produtos:", error);
    }
}

// fetchProducts();