class CountryEntity {
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
  public static selectCountryDetails() {
    return {
      country_id: true,
      country_name: true,
      country_code: true,
      is_deleted: true,
      date_created: true,
      date_updated: true,
    };
  }
}
export default CountryEntity;
