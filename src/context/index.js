import React, { createContext, useState } from 'react';

const ParkContext = createContext();

const ParkProvider = (props) => {
  const [background, setBackground] = useState(false);

    return (
        <>
            <ParkContext.Provider value={{
                background,
                setBackground,
            }}>
                {props.children}
            </ParkContext.Provider>
        </>
    );
}

export  { ParkProvider, ParkContext };