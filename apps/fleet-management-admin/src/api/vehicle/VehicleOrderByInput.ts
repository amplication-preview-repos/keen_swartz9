import { SortOrder } from "../../util/SortOrder";

export type VehicleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  manufacturer?: SortOrder;
  model?: SortOrder;
  plateNumber?: SortOrder;
  updatedAt?: SortOrder;
  year?: SortOrder;
};
