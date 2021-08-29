class FarmingEntity {
  /**
   * Returns all data except the password fields
   * @param data
   * @returns
   */
  public static removeFields(data): object {
    const { farmingDetails, ...restData } = data;
    return restData;
  }
  /**
   * Returns an object with a list of Farming details to be selected
   * @param
   * @returns
   *
   */
  public static selectFarmingDetails() {
    return {
      farming_id: true,
      farming_name: true,
      farming_duration: true,
      is_deleted: true,
      date_created: true,
      date_updated: true,
      investments: {
        select: {
          investment_id: true,
        },
      },
    };
  }
}
export default FarmingEntity;
