import { createContext, useContext, useState } from "react";

export const SetupContext = createContext(true)

export const SetupContextProvider = ({children, initial}) => {
    const [setup, setSetup] = useState(initial)

    return (
        <SetupContext.Provider value={ {setup, setSetup} }>
            {children}
        </SetupContext.Provider>
    )
}