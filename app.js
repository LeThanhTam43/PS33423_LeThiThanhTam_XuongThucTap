"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class DataFetcher {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }
    fetchData() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
    }
}
class App {
    constructor(apiUrl) {
        this.dataFetcher = new DataFetcher(apiUrl);
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield this.dataFetcher.fetchData();
                this.displayData(products);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        });
    }
    displayData(products) {
        const container = document.getElementById('product-container');
        if (container) {
            if (products && products.length > 0) {
                products.forEach(product => {
                    const productDiv = document.createElement('div');
                    productDiv.classList.add('product');
                    productDiv.innerHTML = `
                        <a href="detail.html?id=${product.id}">
                        <img src="${product.image}" alt="${product.name}" style="width:100px;height:auto;">
                       </a>
                        <h3>${product.name}</h3>
                        <p style="text-decoration: line-through; color: red;">${product.price} VND</p>
                        <p>${product.sale} VND</p>
                    `;
                    container.appendChild(productDiv);
                });
            }
            else {
                console.error('No products found');
            }
        }
    }
}

const app = new App('http://localhost:3000/products');
app.init();
