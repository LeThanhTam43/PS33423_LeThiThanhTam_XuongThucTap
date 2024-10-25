var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var ProductDetail = /** @class */ (function () {
    function ProductDetail(apiUrl) {
        this.apiUrl = apiUrl;
    }
 
    ProductDetail.prototype.fetchProduct = function (productId) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("".concat(this.apiUrl, "/").concat(productId))];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    
    ProductDetail.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var productId, product, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productId = new URLSearchParams(window.location.search).get('id');
                        if (!productId) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.fetchProduct(productId)];
                    case 2:
                        product = _a.sent();
                        this.displayProduct(product);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.error('Error fetching product:', error_1);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        console.error('Product ID not found in URL');
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
   
    ProductDetail.prototype.displayProduct = function (product) {
        var container = document.getElementById('product-detail-container');
        if (container) {
            container.innerHTML = "\n                <div class=\"container\">\n                    <div class=\"image-section\">\n                        <img alt=\"".concat(product.name, "\" height=\"600\" src=\"").concat(product.image, "\" width=\"600\" />\n                    </div>\n                    <div class=\"details-section\">\n                        <h2>").concat(product.name, "</h2>\n                        <p class=\"purchase-count\">\u0110\u00E3 mua: ").concat(product.purchaseCount, " l\u01B0\u1EE3t</p>\n                        <div class=\"storage\">\n                            <strong>C\u00E1ch b\u1EA3o qu\u1EA3n</strong>\n                            <p>").concat(product.storage, "</p>\n                        </div>\n                        <div class=\"ingredients\">\n                            <strong>Th\u00E0nh ph\u1EA7n</strong>\n                            <p>").concat(product.ingredients, "</p>\n                        </div>\n                        <div class=\"quantity\">\n                            <strong>S\u1ED1 l\u01B0\u1EE3ng:</strong>\n                            <button>-</button>\n                            <input type=\"text\" value=\"1\" />\n                            <button>+</button>\n                        </div>\n                        <div class=\"price\">\n                            <strong>Gi\u00E1 b\u00E1n: ").concat(product.sale, " VN\u0110</strong>\n                        </div>\n                        <div class=\"buttons\">\n                            <button class=\"add-to-cart\">\n                                <i class=\"fas fa-shopping-cart\"></i> Th\u00EAm V\u00E0o Gi\u1ECF H\u00E0ng\n                            </button>\n                            <button>Mua Ngay</button>\n                        </div>\n                        <div class=\"social-icons\">\n                            <a href=\"#\"><i class=\"fas fa-phone\"></i></a>\n                            <a href=\"#\"><i class=\"fas fa-comments\"></i></a>\n                        </div>\n                    </div>\n                </div>\n            ");
        }
    };
    return ProductDetail;
}());

var productDetail = new ProductDetail('http://localhost:3000/products');
productDetail.init();
