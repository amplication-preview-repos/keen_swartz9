import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { MaintenanceTitle } from "../maintenance/MaintenanceTitle";
import { TripHistoryTitle } from "../tripHistory/TripHistoryTitle";

export const VehicleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="maintenances"
          reference="Maintenance"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MaintenanceTitle} />
        </ReferenceArrayInput>
        <TextInput label="manufacturer" source="manufacturer" />
        <TextInput label="model" source="model" />
        <TextInput label="plateNumber" source="plateNumber" />
        <ReferenceArrayInput
          source="tripHistories"
          reference="TripHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TripHistoryTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="year" source="year" />
      </SimpleForm>
    </Create>
  );
};
