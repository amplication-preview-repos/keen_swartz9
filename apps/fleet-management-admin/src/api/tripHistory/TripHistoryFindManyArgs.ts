import { TripHistoryWhereInput } from "./TripHistoryWhereInput";
import { TripHistoryOrderByInput } from "./TripHistoryOrderByInput";

export type TripHistoryFindManyArgs = {
  where?: TripHistoryWhereInput;
  orderBy?: Array<TripHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
