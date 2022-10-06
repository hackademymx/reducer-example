import React from "react";
import { loginPet } from "../../utils";

import { actions, initialState, reducer } from "./reducer";

export default function Login() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const ChangeUser = (e) => {
    const { id, value } = e.target;
    dispatch({ type: actions.MODIFY_USER, id, value });
  };

  const tryLogin = async () => {
    try {
      dispatch({ type: actions.LOGIN });
      const response = await loginPet(state.user);
      dispatch({ type: actions.LOGIN_SUCCESS });
    } catch (error) {
      dispatch({ type: actions.LOGIN_ERROR });
    }
  };

  React.useEffect(() => {
    if (state.isSuccess) {
      //codigo para redirigir
    }
  }, [state.isSuccess]);

  return (
    <div className="formulario">
      <h1>Login</h1>
      <div className="inputs">
        <label htmlFor="email">Correo</label>
        <input
          onChange={ChangeUser}
          id="email"
          type="text"
          value={state.user.email}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          onChange={ChangeUser}
          id="password"
          type="password"
          value={state.user.password}
        />
        {state.isSuccess && "Usuario Logeado"}
        {state.error && "Error al iniciar Sesion"}
        <button disabled={state.loading} onClick={tryLogin}>
          {state.loading ? "Cargando..." : "Entrar"}
        </button>
      </div>
    </div>
  );
}
