import { RawArticle } from "../types";

class ArticleModal {
  imageUrl: string;
  price: number;
  formattedPrice: string;
  articleId: string;
  description: string;
  shippingDate: string;
  rating: number;
  averageRating: string;
  constructor(params: RawArticle) {
    const {
      images,
      price,
      articleId,
      expectedDeliveryDate,
      title,
      averageRating,
    } = params;

    this.imageUrl = images[0].url;
    this.formattedPrice = price.formatted;
    this.price = price.amount;
    this.articleId = articleId;
    this.description = title;
    this.shippingDate = expectedDeliveryDate;
    this.rating = Math.round(parseInt(averageRating));
    this.averageRating = averageRating;
  }
}

export default ArticleModal;
