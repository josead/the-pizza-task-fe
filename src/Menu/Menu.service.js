class BaseService {
  throw(err) {
    // TODO: Make this error show in message toast.
    console.log(err);
  }

  fetch() {
    return fetch(...arguments);
  }
}

class MenuService extends BaseService {
  async getMenu() {
    try {
      const menu = await this.fetch("/api/menu");

      return menu;
    } catch (e) {
      this.throw(e);
    }
  }
}

export const menuService = new MenuService();
