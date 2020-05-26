class CartServiceMock {
  async getDeliveryFee() {
    const feeByCurrency = {
      EUR: 5,
      USD: 7,
    };

    return feeByCurrency;
  }

  async sendOrder() {
    return true;
  }
}

export const cartService = new CartServiceMock();
