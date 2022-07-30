import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ListTripsPage from "../pages/ListTripsPage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import AdminHomePage from "../pages/AdminHomePage";
import CreateTripPage from "../pages/CreateTripPage";
import LoginPage from "../pages/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage";
import Header from "../components/Header";

export const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/trips/list" element={<ListTripsPage />} />
        <Route path="/trips/application" element={<ApplicationFormPage />} />
        <Route path="/admin/trips/list" element={<AdminHomePage />} />
        <Route path="/admin/trips/create" element={<CreateTripPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
