export interface Article {
  articleId: string;
  imageUrl: string;
  price: string;
  description: string;
  shippingDate: string;
}

type Image = {
  cloudinaryId: string;
  url: string;
};
export interface RawArticle {
  articleId: string;
  articleUrl: string;
  averageRating: string;
  expectedDeliveryDate: string;
  images: Array<Image>;
  oldPrice: { formatted: string; amount: number; currency: string };
  price: { formatted: string; amount: number; currency: string };
  productId: string;
  shippingTimeMax: string;
  shippingTimeMin: string;
  slug: string;
  title: string;
}
