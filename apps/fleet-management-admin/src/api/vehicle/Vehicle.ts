import { Maintenance } from "../maintenance/Maintenance";
import { TripHistory } from "../tripHistory/TripHistory";

export type Vehicle = {
  createdAt: Date;
  id: string;
  maintenances?: Array<Maintenance>;
  manufacturer: string | null;
  model: string | null;
  plateNumber: string | null;
  tripHistories?: Array<TripHistory>;
  updatedAt: Date;
  year: number | null;
};
