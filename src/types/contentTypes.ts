export interface ProductCardType {
  id: number;
  product_image: string;
  product_name: string;
  product_stars: number;
  connect_link: string;
  download_link: string;
}
export interface ProductDetailType {
  id: number;
  product_image: string;
  product_name: string;
  product_stars: number;
  connect_link: string;
  product_review: string[];
  product_height: string;
  product_width: string;
  product_price: string;
  whatsapp_link: string;
  download_link: string;
}
