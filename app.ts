class DataFetcher {
    private apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    async fetchData(): Promise<any[]> {
        const response = await fetch(this.apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();  
    }
}

class App {
    private dataFetcher: DataFetcher;

    constructor(apiUrl: string) {
        this.dataFetcher = new DataFetcher(apiUrl);
    }

    async init() {
        try {
            const products = await this.dataFetcher.fetchData(); 
            this.displayData(products);  
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    private displayData(products: any[]) {
        const container = document.getElementById('product-container');
        if (container) {
            if (products && products.length > 0) {  
                products.forEach(product => {
                    const productDiv = document.createElement('div');
                    productDiv.classList.add('product');
                    productDiv.innerHTML = `
                      <h3>${product.name}</h3>
                        <img src="${product.image}" alt="${product.name}" style="width:100px;height:auto;">
                        <p style="text-decoration: line-through; color: red;">${product.price} VND</p>
                        <p>${product.sale} VND</p>
                    `;
                    container.appendChild(productDiv);
                });
            } else {
                console.error('No products found');
            }
        }
    }
}


const app = new App('http://localhost:3000/products');
app.init();