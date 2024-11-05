import React, { createContext, useState } from "react";
import AuthContainer from "./containers/AuthContainer";
import ChatContainer from "./containers/ChatContainer";

export const AuthContext = createContext();

const App = () => {
  const [token, setToken] = useState(null);

  const handleSetToken = (token) => {
    setToken(token);
  };

  return (
    <AuthContext.Provider value={{ token, setToken: handleSetToken }}>
      {token ? (
        <ChatContainer />
      ) : (
        <AuthContainer setToken={handleSetToken} />
      )}
    </AuthContext.Provider>
  );
}

export default App;
