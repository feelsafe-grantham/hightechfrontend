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
  product_price: number;
  whatsapp_link: string;
  download_link: string;
}

export interface BlogCardType {
  id: number;
  blog_images: string[];
  blog_title: string;
  read_min: string;
}
export interface BlogDetailType {
  id: number;
  blog_images: string[];
  blog_title: string;
  read_min: string;
  author_name: string;
  author_image: string;
  blog_content: string;
}
