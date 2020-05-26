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
  async sendOrder({ form }) {
    // TODO:
  }
}

export const cartService = new CartService();
