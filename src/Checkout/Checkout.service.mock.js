class CartServiceMock {
  async sendOrder() {
    return true;
  }
}

export const cartService = new CartServiceMock();
