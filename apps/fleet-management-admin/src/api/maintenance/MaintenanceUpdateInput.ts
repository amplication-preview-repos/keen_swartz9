import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type MaintenanceUpdateInput = {
  cost?: number | null;
  date?: Date | null;
  description?: string | null;
  vehicle?: VehicleWhereUniqueInput | null;
};
