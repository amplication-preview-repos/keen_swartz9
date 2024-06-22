import { TripHistory } from "../tripHistory/TripHistory";

export type Driver = {
  createdAt: Date;
  email: string | null;
  id: string;
  licenseNumber: string | null;
  name: string | null;
  phoneNumber: string | null;
  tripHistories?: Array<TripHistory>;
  updatedAt: Date;
};
