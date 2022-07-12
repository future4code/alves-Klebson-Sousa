export const goToListTrips = (navigate) => {
  navigate("/trips/list");
};

export const goToAdminHome = (navigate) => {
  navigate("/admin/trips/list");
};
export const goToLoginPage = (navigate) => {
  navigate("/login");
};

export const goToBack = (navigate) => {
  navigate(-1);
};

export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goToAplicationForm = (navigate) => {
  navigate("/trips/application");
};

  export const goToCreateTrip = (navigate) => {
    navigate("/admin/trips/create");
  };
  export const goToTripDetails = (navigate) => {
    navigate("/admin/trips/:id");
  };