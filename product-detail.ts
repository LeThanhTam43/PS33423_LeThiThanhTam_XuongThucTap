class ProductDetail {
    private apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    async fetchProduct(productId: string): Promise<any> {
        const response = await fetch(`${this.apiUrl}/${productId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }

    
    async init() {
        const productId = new URLSearchParams(window.location.search).get('id'); 
        if (productId) {
            try {
                const product = await this.fetchProduct(productId);
                this.displayProduct(product);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        } else {
            console.error('Product ID not found in URL');
        }
    }

   
    displayProduct(product: any) {
        const container = document.getElementById('product-detail-container');
        if (container) {
            container.innerHTML = `
                <div class="container">
                    <div class="image-section">
                        <img alt="${product.name}" height="600" src="${product.image}" width="600" />
                    </div>
                    <div class="details-section">
                        <h2>${product.name}</h2>
                        <p class="purchase-count">Đã mua: ${product.purchaseCount} lượt</p>
                        <div class="storage">
                            <strong>Cách bảo quản</strong>
                            <p>${product.storage}</p>
                        </div>
                        <div class="ingredients">
                            <strong>Thành phần</strong>
                            <p>${product.ingredients}</p>
                        </div>
                        <div class="quantity">
                            <strong>Số lượng:</strong>
                            <button>-</button>
                            <input type="text" value="1" />
                            <button>+</button>
                        </div>
                        <div class="price">
                            <strong>Giá bán: ${product.sale} VNĐ</strong>
                        </div>
                        <div class="buttons">
                            <button class="add-to-cart">
                                <i class="fas fa-shopping-cart"></i> Thêm Vào Giỏ Hàng
                            </button>
                            <button>Mua Ngay</button>
                        </div>
                        <div class="social-icons">
                            <a href="#"><i class="fas fa-phone"></i></a>
                            <a href="#"><i class="fas fa-comments"></i></a>
                        </div>
                    </div>
                </div>
            `;
        }
    }
}


const productDetail = new ProductDetail('http://localhost:3000/products');
productDetail.init();