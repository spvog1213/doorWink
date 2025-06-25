import { createContext, useReducer } from "react";
import cartReducer, { initialState } from "./reducer";

export const ProjectContext = createContext(null);

export default function ProjectProvider({ children }) {
  const [ state, dispatch ] = useReducer(cartReducer, initialState);
  
  return (
    <ProjectContext.Provider value={{state, dispatch}}>
      {children}
    </ProjectContext.Provider>
  )
}