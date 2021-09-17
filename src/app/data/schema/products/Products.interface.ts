export interface Shop {
    categories: ShopCategory[];
    products:   Product[];
}

export interface Products{
    id:      number;
    name:    string;
    ordinal: number;
    products: Product[];
}

export interface ShopCategory {
    id:      number;
    name:    string;
    ordinal: number;
}

export interface Product {
    product_data: ProductData;
}

export interface ProductData {
    id:         number;
    kind:       number;
    ean:        string;
    price:      number;
    name:       string;
    categories: ProductDataCategory[];
    stock:      number;
    ordinal?:   number;
}

export interface ProductDataCategory {
    category_id: number;
    ordinal:     number;
}