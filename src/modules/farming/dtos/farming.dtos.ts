export type CreateFarmingDto = {
  farming_id: string;
  farming_name: string;
  farming_duration: string;
};
export type FetchFarmingDto = {
  farming_id: string;
  farming_name: string;
  farming_duration: string;
  page: number;
  perPage: number;
};
export type FarmingResponseDto = {
  farmingData: object;
  message: string;
};
