import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type MaintenanceCreateInput = {
  cost?: number | null;
  date?: Date | null;
  description?: string | null;
  vehicle?: VehicleWhereUniqueInput | null;
};
