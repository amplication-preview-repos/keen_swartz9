import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TripHistoryListRelationFilter } from "../tripHistory/TripHistoryListRelationFilter";

export type DriverWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  licenseNumber?: StringNullableFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  tripHistories?: TripHistoryListRelationFilter;
};
