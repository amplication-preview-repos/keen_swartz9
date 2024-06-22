import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { DriverTitle } from "../driver/DriverTitle";
import { VehicleTitle } from "../vehicle/VehicleTitle";

export const TripHistoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="destination" source="destination" />
        <ReferenceInput source="driver.id" reference="Driver" label="Driver">
          <SelectInput optionText={DriverTitle} />
        </ReferenceInput>
        <DateTimeInput label="endTime" source="endTime" />
        <TextInput label="origin" source="origin" />
        <DateTimeInput label="startTime" source="startTime" />
        <ReferenceInput source="vehicle.id" reference="Vehicle" label="Vehicle">
          <SelectInput optionText={VehicleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
