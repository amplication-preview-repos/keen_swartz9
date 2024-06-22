import { TripHistoryUpdateManyWithoutDriversInput } from "./TripHistoryUpdateManyWithoutDriversInput";

export type DriverUpdateInput = {
  email?: string | null;
  licenseNumber?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  tripHistories?: TripHistoryUpdateManyWithoutDriversInput;
};
