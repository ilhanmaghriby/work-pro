import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Vacancy from "./component/Vacancy";
import VacancyDetails from "./component/VacancyDetails";
import Login from "./component/Login";
import Register from "./component/Register";
import ChangePass from "./component/admin/ChangePass";
import { GlobalProvider } from "./component/context/GlobalContext";
import Dashboard from "./component/admin/Dashboard";
import ListJob from "./component/admin/ListJob";
import FormJob from "./component/admin/FormJob";
import ListJobDetails from "./component/admin/ListJobDetails";
import EditForm from "./component/admin/EditForm";
import Cookies from "js-cookie";

const App = () => {
  const AdminRoute = (props) => {
    if (Cookies.get("token") !== undefined) {
      return props.children;
    } else if (Cookies.get("token") === undefined) {
      return <Navigate to="/" />;
    }
  };

  const GuestRoute = (props) => {
    if (Cookies.get("token") !== undefined) {
      return <Navigate to="/" />;
    } else if (Cookies.get("token") === undefined) {
      return props.children;
    }
  };
  return (
    <div className="app">
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to={"/"} />} />
            <Route path="/vacancy" element={<Vacancy />} />
            <Route path="/vacancy/:id" element={<VacancyDetails />} />

            <Route
              path="/login"
              element={
                <GuestRoute>
                  <Login />
                </GuestRoute>
              }
            />
            <Route
              path="/register"
              element={
                <GuestRoute>
                  <Register />
                </GuestRoute>
              }
            />

            {/* Admin */}

            <Route
              path="/change-pass"
              element={
                <AdminRoute>
                  <ChangePass />
                </AdminRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <AdminRoute>
                  <Dashboard />
                </AdminRoute>
              }
            />
            <Route
              path="/dashboard/list-job"
              element={
                <AdminRoute>
                  <ListJob />
                </AdminRoute>
              }
            />
            <Route
              path="/dashboard/list-job/:id"
              element={
                <AdminRoute>
                  <ListJobDetails />
                </AdminRoute>
              }
            />
            <Route
              path="/dashboard/list-job/form-job"
              element={
                <AdminRoute>
                  <FormJob />
                </AdminRoute>
              }
            />
            <Route
              path="/dashboard/list-job/edit/:id"
              element={
                <AdminRoute>
                  <EditForm />
                </AdminRoute>
              }
            />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
