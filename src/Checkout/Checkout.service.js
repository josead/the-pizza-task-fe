import { BaseService } from "../Shared/Base.service";

class CartService extends BaseService {
  async getDeliveryFee() {
    try {
      const menu = await this.fetch("/api/delivery-fee");

      return menu;
    } catch (e) {
      this.throw(e);
    }
  }
}

export const cartService = new CartService();
