import { MaintenanceCreateNestedManyWithoutVehiclesInput } from "./MaintenanceCreateNestedManyWithoutVehiclesInput";
import { TripHistoryCreateNestedManyWithoutVehiclesInput } from "./TripHistoryCreateNestedManyWithoutVehiclesInput";

export type VehicleCreateInput = {
  maintenances?: MaintenanceCreateNestedManyWithoutVehiclesInput;
  manufacturer?: string | null;
  model?: string | null;
  plateNumber?: string | null;
  tripHistories?: TripHistoryCreateNestedManyWithoutVehiclesInput;
  year?: number | null;
};
