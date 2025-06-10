export interface HeroImagesType {
  image: string;
  aspectRatio: "11" | "21" | "31";
}
export interface TeamMemberType {
  name: string;
  designation: string;
  image: string;
}

export interface AlertProps {
  type: "rating" | "like" | "testimonial" | "subscribed" | "comment";
  emoji?: string;
  name: string;
  segment: string;
  message: string;
}
export interface ProductCardType {
  id: number;
  product_image: string[];
  product_name: string;
  product_stars: number;
  connect_link: string;
  download_link: string;
}
export interface ProductDetailType {
  id: number;
  product_image: string[];
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
  images: string[];
  title: string;
  read_min: string;
}
export interface BlogDetailType {
  id: number;
  images: string[];
  title: string;
  read_min: string;
  author_name: string;
  author_image: string;
  content: string;
}

export interface ImageCtaType {
  imageUrl: string;
  text: string;
  subText: string;
  aspectRatio: "31" | "21" | "15" | "11";
  link?: string;
}

export interface AboutSection {
  about_image: string;
  about_para_1: string;
  about_para_2: string;
  heading: string;
  sub_heading: string;
}

export interface AboutPageData {
  banner_img: string;
  banner_heading: string;
  banner_text: string;
  banner_contact_1: string;
  banner_contact_2: string;
  description_1: string;
  description_2: string;
  about_sec: AboutSection[];
  page_images: string[];
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  meta_url: string;
  meta_canonical_url: string;
}

export interface CitiesType {
  id: number;
  label: string;
  url: string;
}
