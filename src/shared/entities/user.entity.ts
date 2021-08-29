class UserEntity {
  /**
   * Returns all data except the removed fields
   * @param data
   * @returns
   */
  public static removeFields(data): object {
    const { password, password_reset_token, login_attempt, ...restData } = data;

    return restData;
  }

  /**
   * Returns an object with a list of employee details to be selected
   * @param
   * @returns
   *            String
              String
  email                String           @unique
  phone                String           @unique
  is_active            Boolean          @default(true)
  is_admin             Boolean          @default(false)
  is_default_password  Boolean          @default(true)
  password             String
  password_reset_token String?          @unique
  activiation_token    String?          @unique
  last_login           DateTime?
  login_attempt        Int              @default(0)
  role_id              String
  country_id           String
   */
  public static selectEmployeeDetails() {
    return {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      phone: true,
      is_admin: true,
      is_active: true,
      last_login: true,
      login_attempt: true,
      date_created: true,
      date_updated: true,
      role_id: true,
      country_id: true,
      role: {
        select: {
          role_id: true,
          role_name: true,
        },
      },
      country: {
        select: {
          country_id: true,
          country_name: true,
        },
      },
    };
  }
}

export default UserEntity;
