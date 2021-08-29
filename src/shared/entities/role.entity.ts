class RoleEntity {
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
  public static selectRoleDetails() {
    return {
      role_id: true,
      role_name: true,
      is_deleted: true,
      date_created: true,
      date_updated: true,
      permissions: {
        select: {
          permission_id: true,
          permission_name: true,
        },
      },
    };
  }
}
export default RoleEntity;
