import { Vehicle as TVehicle } from "../api/vehicle/Vehicle";

export const VEHICLE_TITLE_FIELD = "manufacturer";

export const VehicleTitle = (record: TVehicle): string => {
  return record.manufacturer?.toString() || String(record.id);
};
