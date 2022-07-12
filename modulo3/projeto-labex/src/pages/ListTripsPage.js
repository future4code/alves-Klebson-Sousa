import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import { goToBack, goToAplicationForm } from "../routes/coordinator";
import { useState, useEffect } from "react";
const ListTripsPage = () => {
  const navigate = useNavigate()
  const [trips, setTrips] = useState()

  

  return (
    <div>
      <h1>Lista de Viagens</h1>
      <button onClick={() => goToBack(navigate)}>Voltar</button>
      <button onClick={()=> goToAplicationForm(navigate)}>Inscrever-se</button>
      <p>
        Lorem ipsum placerat habitant dui pulvinar orci fames, pretium cursus
        orci dictum phasellus suscipit, litora aenean porta morbi eleifend
        accumsan. rhoncus euismod vitae tincidunt aliquam donec ultricies amet,
        commodo donec dictumst erat fames vehicula lacus, consequat quam nisl
        platea imperdiet lorem. eleifend et tincidunt rutrum nisi torquent et
        semper ac, hac leo blandit sed cubilia quam. ligula dictum rutrum
        interdum orci laoreet est imperdiet, etiam vitae quisque varius ligula
        conubia phasellus accumsan, id netus curabitur ac non aenean. himenaeos
        nec senectus tellus mi vivamus id diam conubia, aliquam consequat
        torquent morbi ac nibh.
      </p>
    </div>
  );
};

export default ListTripsPage;
