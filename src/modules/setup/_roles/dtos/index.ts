export type CreateRoleDto = {
  role_name: string;
};

export type FetchRoleDto = {
  role_id: string;
  role_name: string;
  page: number;
  perPage: number;
};

export type UpdateRoleDto = {
  role_id: string;
  role_name: string;
};
export type RoleResponseDto = {
  roleData: object;
  message: string;
};
