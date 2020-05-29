import { BaseService } from "../Shared/Base.service";

class CheckuotService extends BaseService {
  async sendOrder(data) {
    const response = await this.post("/api/order", {
      ...data,
    });

    return response.json();
  }
}

export const checkoutService = new CheckuotService();
