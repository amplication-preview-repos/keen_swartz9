import { SortOrder } from "../../util/SortOrder";

export type MaintenanceOrderByInput = {
  cost?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  vehicleId?: SortOrder;
};
