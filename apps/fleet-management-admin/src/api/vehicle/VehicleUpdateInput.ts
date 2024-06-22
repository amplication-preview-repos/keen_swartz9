import { MaintenanceUpdateManyWithoutVehiclesInput } from "./MaintenanceUpdateManyWithoutVehiclesInput";
import { TripHistoryUpdateManyWithoutVehiclesInput } from "./TripHistoryUpdateManyWithoutVehiclesInput";

export type VehicleUpdateInput = {
  maintenances?: MaintenanceUpdateManyWithoutVehiclesInput;
  manufacturer?: string | null;
  model?: string | null;
  plateNumber?: string | null;
  tripHistories?: TripHistoryUpdateManyWithoutVehiclesInput;
  year?: number | null;
};
