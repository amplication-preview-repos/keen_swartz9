import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TripHistoryModuleBase } from "./base/tripHistory.module.base";
import { TripHistoryService } from "./tripHistory.service";
import { TripHistoryController } from "./tripHistory.controller";
import { TripHistoryResolver } from "./tripHistory.resolver";

@Module({
  imports: [TripHistoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [TripHistoryController],
  providers: [TripHistoryService, TripHistoryResolver],
  exports: [TripHistoryService],
})
export class TripHistoryModule {}
