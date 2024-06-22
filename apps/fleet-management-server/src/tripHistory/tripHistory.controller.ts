import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TripHistoryService } from "./tripHistory.service";
import { TripHistoryControllerBase } from "./base/tripHistory.controller.base";

@swagger.ApiTags("tripHistories")
@common.Controller("tripHistories")
export class TripHistoryController extends TripHistoryControllerBase {
  constructor(
    protected readonly service: TripHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
