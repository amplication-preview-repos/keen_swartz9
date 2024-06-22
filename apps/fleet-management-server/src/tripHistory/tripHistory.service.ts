import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TripHistoryServiceBase } from "./base/tripHistory.service.base";

@Injectable()
export class TripHistoryService extends TripHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
