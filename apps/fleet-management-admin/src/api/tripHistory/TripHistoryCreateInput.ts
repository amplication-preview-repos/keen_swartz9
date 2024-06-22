import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type TripHistoryCreateInput = {
  destination?: string | null;
  driver?: DriverWhereUniqueInput | null;
  endTime?: Date | null;
  origin?: string | null;
  startTime?: Date | null;
  vehicle?: VehicleWhereUniqueInput | null;
};
