import React from "react";
import { Reset } from "./styledScreenReset";
import {FiRefreshCcw} from 'react-icons/fi'

const ScreenReset = (props) => {
  return (
    <Reset>
      <h2>Profile</h2>
      <h3>Acabaram os matches! Clique no botão abaixo para reiniciar</h3>
      <div>
        <button onClick={props.resetProfile}><FiRefreshCcw/></button>
      </div>
    </Reset>
  );
};

export default ScreenReset;
