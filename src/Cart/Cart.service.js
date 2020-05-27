import { BaseService } from "../Shared/Base.service";

class CartService extends BaseService {
  async getDeliveryFee() {
    try {
      const response = await this.fetch("/api/delivery-fee");

      const fee = await response.json();

      return fee;
    } catch (e) {
      this.throw(e);
    }
  }
}

export const cartService = new CartService();
