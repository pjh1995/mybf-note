import React from "react";
import { Route } from "react-router-dom";
import AnimalHospitalMapPage from "./pages/AnimalHospitalMapPage";
import TodoCalendarPage from "./pages/TodoCalendarPage";
import TodoSearchPage from "./pages/TodoSearchPage";
import TodoFormPage from "./pages/TodoFormPage";
import PetInfoPage from "./pages/PetInfoPage";
import PetInputFormPage from "./pages/PetInputFormPage";
import AnimalHospitalSearchPage from "./pages/AnimalHospitalSearchPage";
import WeightListPage from "./pages/WeightListPage";
import ConditionListPage from "./pages/ConditionListPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <>
      <Route component={TodoCalendarPage} path={["/@:username", "/"]} exact />
      <Route component={TodoSearchPage} path="/todo-search" />
      <Route component={TodoFormPage} path="/todo-form" />
      <Route component={PetInfoPage} path="/pet-info" />
      <Route component={PetInputFormPage} path="/pet-form" />
      <Route component={AnimalHospitalMapPage} path="/hospital-map" />
      <Route component={AnimalHospitalSearchPage} path="/hospital-search" />
      <Route component={WeightListPage} path="/weight" />
      <Route component={ConditionListPage} path="/condition" />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
    </>
  );
};

export default App;
