import React, { createContext, useState } from "react";

export const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const [isFormValid, setIsFormValid] = useState(false);

  const contextValue = {
    isFormValid,
    setIsFormValid,
  };

  return <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>;
};

export default FormContextProvider;
