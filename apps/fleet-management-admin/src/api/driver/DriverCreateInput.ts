import { TripHistoryCreateNestedManyWithoutDriversInput } from "./TripHistoryCreateNestedManyWithoutDriversInput";

export type DriverCreateInput = {
  email?: string | null;
  licenseNumber?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  tripHistories?: TripHistoryCreateNestedManyWithoutDriversInput;
};
