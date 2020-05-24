class MenuServiceMock {
  async getMenu() {
    try {
      const menu = [
        {
          id: "p_01",
          name: "Marinara Pizza",
          desc:
            "Your favorite cheese pizza made with classic marinara sauce topped with mozzarella cheese. Order pizza online now.",
          price: {
            value: 10,
            currency: "EUR",
          },
        },
        {
          id: "p_02",
          name: "Margherita Pizza",
          desc:
            "Your favorite cheese pizza made with classic marinara sauce topped with mozzarella cheese. Order pizza online now.",
          price: {
            value: 10,
            currency: "EUR",
          },
        },
        {
          id: "p_03",
          name: "Romana Pizza",
          desc:
            "Your favorite cheese pizza made with classic marinara sauce topped with mozzarella cheese. Order pizza online now.",
          price: {
            value: 12,
            currency: "EUR",
          },
        },
        {
          id: "p_04",
          name: "Siciliana Pizza",
          desc:
            "Your favorite cheese pizza made with classic marinara sauce topped with mozzarella cheese. Order pizza online now.",
          price: {
            value: 12,
            currency: "EUR",
          },
        },
        {
          id: "p_05",
          name: "Prosciutto Pizza",
          desc:
            "Your favorite cheese pizza made with classic marinara sauce topped with mozzarella cheese. Order pizza online now.",
          price: {
            value: 12,
            currency: "EUR",
          },
        },
        {
          id: "p_06",
          name: "Capricciosa Pizza",
          desc:
            "Your favorite cheese pizza made with classic marinara sauce topped with mozzarella cheese. Order pizza online now.",
          price: {
            value: 15,
            currency: "EUR",
          },
        },
        {
          id: "p_07",
          name: "Quattro Stagioni Pizza",
          desc:
            "Your favorite cheese pizza made with classic marinara sauce topped with mozzarella cheese. Order pizza online now.",
          price: {
            value: 15,
            currency: "EUR",
          },
        },
        {
          id: "p_08",
          name: "Quattro Formaggi Pizza",
          desc:
            "Your favorite cheese pizza made with classic marinara sauce topped with mozzarella cheese. Order pizza online now.",
          price: {
            value: 15,
            currency: "EUR",
          },
        },
      ];

      return menu;
    } catch (e) {}
  }
}

export const menuService = new MenuServiceMock();
