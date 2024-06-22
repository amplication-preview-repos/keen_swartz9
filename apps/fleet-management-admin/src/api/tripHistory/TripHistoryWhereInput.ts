import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type TripHistoryWhereInput = {
  destination?: StringNullableFilter;
  driver?: DriverWhereUniqueInput;
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  origin?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
  vehicle?: VehicleWhereUniqueInput;
};
