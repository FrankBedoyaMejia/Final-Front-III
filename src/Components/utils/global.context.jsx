import { createContext, useEffect, useMemo, useReducer } from "react";

export const ContextGlobal = createContext(undefined);

export const initialState = { theme: "light", data: [] };

export const actions = {
  SET_THEME_LIGHT: "SET_THEME_LIGHT",
  SET_THEME_DARK: "SET_THEME_DARK",
  SET_DATA: "SET_DATA",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_DATA: {
      return { ...state, data: action.payload };
    }
    case actions.SET_THEME_DARK:
      return { ...state, theme: "dark" };
    case actions.SET_THEME_LIGHT:
      return { ...state, theme: "light" };
    default: {
      return state;
    }
  }
};

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);

  const providerState = useMemo(
    () => ({
      data: state.data,
      theme: state.theme,
      setData: (array) => {
        dispatch({ type: actions.SET_DATA, payload: array });
      },
      setDarkTheme: () => {
        dispatch({ type: actions.SET_THEME_DARK });
      },
      setLightTheme: () => {
        dispatch({ type: actions.SET_THEME_LIGHT });
      },
    }),
    [state, dispatch]
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => providerState.setData(data));
  }, [providerState]);

  return (
    <ContextGlobal.Provider value={providerState}>
      {children}
    </ContextGlobal.Provider>
  );
};
