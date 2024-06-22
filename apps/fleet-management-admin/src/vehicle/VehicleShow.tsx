import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { VEHICLE_TITLE_FIELD } from "./VehicleTitle";
import { DRIVER_TITLE_FIELD } from "../driver/DriverTitle";

export const VehicleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="manufacturer" source="manufacturer" />
        <TextField label="model" source="model" />
        <TextField label="plateNumber" source="plateNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="year" source="year" />
        <ReferenceManyField
          reference="Maintenance"
          target="vehicleId"
          label="Maintenances"
        >
          <Datagrid rowClick="show">
            <TextField label="cost" source="cost" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Vehicle"
              source="vehicle.id"
              reference="Vehicle"
            >
              <TextField source={VEHICLE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TripHistory"
          target="vehicleId"
          label="TripHistories"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="destination" source="destination" />
            <ReferenceField
              label="Driver"
              source="driver.id"
              reference="Driver"
            >
              <TextField source={DRIVER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="endTime" source="endTime" />
            <TextField label="ID" source="id" />
            <TextField label="origin" source="origin" />
            <TextField label="startTime" source="startTime" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Vehicle"
              source="vehicle.id"
              reference="Vehicle"
            >
              <TextField source={VEHICLE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
