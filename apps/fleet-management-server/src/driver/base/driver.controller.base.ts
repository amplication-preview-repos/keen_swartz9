/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { DriverService } from "../driver.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DriverCreateInput } from "./DriverCreateInput";
import { Driver } from "./Driver";
import { DriverFindManyArgs } from "./DriverFindManyArgs";
import { DriverWhereUniqueInput } from "./DriverWhereUniqueInput";
import { DriverUpdateInput } from "./DriverUpdateInput";
import { TripHistoryFindManyArgs } from "../../tripHistory/base/TripHistoryFindManyArgs";
import { TripHistory } from "../../tripHistory/base/TripHistory";
import { TripHistoryWhereUniqueInput } from "../../tripHistory/base/TripHistoryWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DriverControllerBase {
  constructor(
    protected readonly service: DriverService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Driver })
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createDriver(@common.Body() data: DriverCreateInput): Promise<Driver> {
    return await this.service.createDriver({
      data: data,
      select: {
        createdAt: true,
        email: true,
        id: true,
        licenseNumber: true,
        name: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Driver] })
  @ApiNestedQuery(DriverFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async drivers(@common.Req() request: Request): Promise<Driver[]> {
    const args = plainToClass(DriverFindManyArgs, request.query);
    return this.service.drivers({
      ...args,
      select: {
        createdAt: true,
        email: true,
        id: true,
        licenseNumber: true,
        name: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Driver })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async driver(
    @common.Param() params: DriverWhereUniqueInput
  ): Promise<Driver | null> {
    const result = await this.service.driver({
      where: params,
      select: {
        createdAt: true,
        email: true,
        id: true,
        licenseNumber: true,
        name: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Driver })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateDriver(
    @common.Param() params: DriverWhereUniqueInput,
    @common.Body() data: DriverUpdateInput
  ): Promise<Driver | null> {
    try {
      return await this.service.updateDriver({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          id: true,
          licenseNumber: true,
          name: true,
          phoneNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Driver })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteDriver(
    @common.Param() params: DriverWhereUniqueInput
  ): Promise<Driver | null> {
    try {
      return await this.service.deleteDriver({
        where: params,
        select: {
          createdAt: true,
          email: true,
          id: true,
          licenseNumber: true,
          name: true,
          phoneNumber: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/tripHistories")
  @ApiNestedQuery(TripHistoryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "TripHistory",
    action: "read",
    possession: "any",
  })
  async findTripHistories(
    @common.Req() request: Request,
    @common.Param() params: DriverWhereUniqueInput
  ): Promise<TripHistory[]> {
    const query = plainToClass(TripHistoryFindManyArgs, request.query);
    const results = await this.service.findTripHistories(params.id, {
      ...query,
      select: {
        createdAt: true,
        destination: true,

        driver: {
          select: {
            id: true,
          },
        },

        endTime: true,
        id: true,
        origin: true,
        startTime: true,
        updatedAt: true,

        vehicle: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/tripHistories")
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "update",
    possession: "any",
  })
  async connectTripHistories(
    @common.Param() params: DriverWhereUniqueInput,
    @common.Body() body: TripHistoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tripHistories: {
        connect: body,
      },
    };
    await this.service.updateDriver({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/tripHistories")
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "update",
    possession: "any",
  })
  async updateTripHistories(
    @common.Param() params: DriverWhereUniqueInput,
    @common.Body() body: TripHistoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tripHistories: {
        set: body,
      },
    };
    await this.service.updateDriver({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/tripHistories")
  @nestAccessControl.UseRoles({
    resource: "Driver",
    action: "update",
    possession: "any",
  })
  async disconnectTripHistories(
    @common.Param() params: DriverWhereUniqueInput,
    @common.Body() body: TripHistoryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      tripHistories: {
        disconnect: body,
      },
    };
    await this.service.updateDriver({
      where: params,
      data,
      select: { id: true },
    });
  }
}
