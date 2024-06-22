import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { VehicleTitle } from "../vehicle/VehicleTitle";

export const MaintenanceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="cost" source="cost" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="vehicle.id" reference="Vehicle" label="Vehicle">
          <SelectInput optionText={VehicleTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
