import { BaseService } from "../Shared/Base.service";

class CurrencyService extends BaseService {
  async getCurrencyRates(from, to) {
    try {
      const response = await this.fetch(
        `https://api.openrates.io/latest?base=${from}&symbols=${to}`
      );
      const data = await response.json();

      return data.rates;
    } catch (e) {
      this.throw(e);
    }
  }
}

export const currencyService = new CurrencyService();
