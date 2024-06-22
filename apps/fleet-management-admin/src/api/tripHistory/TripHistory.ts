import { Driver } from "../driver/Driver";
import { Vehicle } from "../vehicle/Vehicle";

export type TripHistory = {
  createdAt: Date;
  destination: string | null;
  driver?: Driver | null;
  endTime: Date | null;
  id: string;
  origin: string | null;
  startTime: Date | null;
  updatedAt: Date;
  vehicle?: Vehicle | null;
};
