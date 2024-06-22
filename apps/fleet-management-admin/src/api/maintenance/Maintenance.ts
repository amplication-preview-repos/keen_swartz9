import { Vehicle } from "../vehicle/Vehicle";

export type Maintenance = {
  cost: number | null;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  updatedAt: Date;
  vehicle?: Vehicle | null;
};
