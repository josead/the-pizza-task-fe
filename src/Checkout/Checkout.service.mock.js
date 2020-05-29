class CartServiceMock {
  async sendOrder() {
    return "Number43242";
  }
}

export const cartService = new CartServiceMock();
