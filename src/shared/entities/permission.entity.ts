class PermissionEntity {
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
   *  permission_id   String   @id @default(uuid())
   */
  public static selectPermissionDetails() {
    return {
      permission_id: true,
      permission_name: true,
      date_created: true,
      date_updated: true,
    };
  }
}
export default PermissionEntity;
