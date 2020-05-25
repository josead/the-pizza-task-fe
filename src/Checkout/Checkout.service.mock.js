class CartServiceMock {
  async getDeliveryFee() {
    try {
      const feeByCurrency = {
        EUR: 5,
        USD: 7,
      };

      return feeByCurrency;
    } catch (e) {}
  }
}

export const cartService = new CartServiceMock();
