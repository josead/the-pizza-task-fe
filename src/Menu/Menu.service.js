import { BaseService } from "../Shared/Base.service";

class MenuService extends BaseService {
  async getMenu() {
    try {
      const response = await this.fetch("/api/menu");

      const menu = await response.json();

      return menu;
    } catch (e) {
      this.throw(e);
    }
  }
}

export const menuService = new MenuService();
