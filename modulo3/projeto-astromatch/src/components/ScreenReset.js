import React from "react";

const ScreenReset = (props) => {
  return (
    <div>
        <h2>Profile</h2>
        <h3>Acabaram os matches! Clique em 'Resetar Perfis' para reiniciar</h3>
        <button onClick={props.resetProfile}>Resetar Profiles</button>

    </div>
  )
}

export default ScreenReset