class CurrencyEntity {
  /**
   * Returns all data except the password fields
   * @param data
   * @returns
   */
  public static removeFields(data): object {
    const { ...restData } = data;
    return restData;
  }
  /**
   * Returns an object with a list of Zone details to be selected
   * @param
   * @returns
   */
  public static selectCurrencyDetails() {
    return {
      currency_id: true,
      currency_type: true,
      currency_name: true,
      currency_code: true,
      currency_icon: true,
      is_deleted: true,
      date_created: true,
      date_updated: true,
    };
  }
}
export default CurrencyEntity;
