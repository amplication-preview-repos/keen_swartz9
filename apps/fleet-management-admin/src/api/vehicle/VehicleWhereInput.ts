import { StringFilter } from "../../util/StringFilter";
import { MaintenanceListRelationFilter } from "../maintenance/MaintenanceListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TripHistoryListRelationFilter } from "../tripHistory/TripHistoryListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type VehicleWhereInput = {
  id?: StringFilter;
  maintenances?: MaintenanceListRelationFilter;
  manufacturer?: StringNullableFilter;
  model?: StringNullableFilter;
  plateNumber?: StringNullableFilter;
  tripHistories?: TripHistoryListRelationFilter;
  year?: IntNullableFilter;
};
