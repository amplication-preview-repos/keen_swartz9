import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MaintenanceList } from "./maintenance/MaintenanceList";
import { MaintenanceCreate } from "./maintenance/MaintenanceCreate";
import { MaintenanceEdit } from "./maintenance/MaintenanceEdit";
import { MaintenanceShow } from "./maintenance/MaintenanceShow";
import { DriverList } from "./driver/DriverList";
import { DriverCreate } from "./driver/DriverCreate";
import { DriverEdit } from "./driver/DriverEdit";
import { DriverShow } from "./driver/DriverShow";
import { VehicleList } from "./vehicle/VehicleList";
import { VehicleCreate } from "./vehicle/VehicleCreate";
import { VehicleEdit } from "./vehicle/VehicleEdit";
import { VehicleShow } from "./vehicle/VehicleShow";
import { TripHistoryList } from "./tripHistory/TripHistoryList";
import { TripHistoryCreate } from "./tripHistory/TripHistoryCreate";
import { TripHistoryEdit } from "./tripHistory/TripHistoryEdit";
import { TripHistoryShow } from "./tripHistory/TripHistoryShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Fleet Management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Maintenance"
          list={MaintenanceList}
          edit={MaintenanceEdit}
          create={MaintenanceCreate}
          show={MaintenanceShow}
        />
        <Resource
          name="Driver"
          list={DriverList}
          edit={DriverEdit}
          create={DriverCreate}
          show={DriverShow}
        />
        <Resource
          name="Vehicle"
          list={VehicleList}
          edit={VehicleEdit}
          create={VehicleCreate}
          show={VehicleShow}
        />
        <Resource
          name="TripHistory"
          list={TripHistoryList}
          edit={TripHistoryEdit}
          create={TripHistoryCreate}
          show={TripHistoryShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
