export interface ProductModel {
  id: string;
  sku: string;
  name: string;
  type: string;
  description: string;
  color: string;
  price: number;
};

export interface ProductFilterModel {
  search: string;
  color: string;
}
