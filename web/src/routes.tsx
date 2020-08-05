import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LandingPage from "./pages/Landing";
import TeacherForm from "./pages/TeacherForm";
import TeacherList from "./pages/TeacherList";
export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LandingPage} />
      <Route path="/study" exact component={TeacherList} />
      <Route path="/give-classes" exact component={TeacherForm} />
    </BrowserRouter>
  );
};
