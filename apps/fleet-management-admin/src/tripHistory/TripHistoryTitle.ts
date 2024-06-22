import { TripHistory as TTripHistory } from "../api/tripHistory/TripHistory";

export const TRIPHISTORY_TITLE_FIELD = "destination";

export const TripHistoryTitle = (record: TTripHistory): string => {
  return record.destination?.toString() || String(record.id);
};
