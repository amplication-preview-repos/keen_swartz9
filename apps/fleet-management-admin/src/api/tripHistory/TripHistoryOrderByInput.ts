import { SortOrder } from "../../util/SortOrder";

export type TripHistoryOrderByInput = {
  createdAt?: SortOrder;
  destination?: SortOrder;
  driverId?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  origin?: SortOrder;
  startTime?: SortOrder;
  updatedAt?: SortOrder;
  vehicleId?: SortOrder;
};
