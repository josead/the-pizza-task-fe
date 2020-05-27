class CartServiceMock {
  async getDeliveryFee() {
    const feeInEur = { value: 5, currency: "EUR" };

    return feeInEur;
  }
}

export const cartService = new CartServiceMock();
