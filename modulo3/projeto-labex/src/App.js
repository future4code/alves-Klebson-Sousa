import "./App.css";
import AdminHomePage from "./pages/AdminHomePage";
import ApplicationFormPage from "./pages/ApplicationFormPage";
import CreateTripPage from "./pages/CreateTripPage";
import HomePage from "./pages/HomePage";
import ListTripsPage from "./pages/ListTripsPage";
import LoginPage from "./pages/LoginPage";
import TripDetailsPage from "./pages/TripDetailsPage";

function App() {
  return (
    <div>
      <HomePage />
      <hr />
      <ListTripsPage />
      <hr />
      <ApplicationFormPage />
      <hr />
      <LoginPage />
      <hr />
      <AdminHomePage />
      <hr />
      <TripDetailsPage />
      <hr />
      <CreateTripPage />
    </div>
  );
}

export default App;
