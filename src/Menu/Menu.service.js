import { BaseService } from "../Shared/Base.service";

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
