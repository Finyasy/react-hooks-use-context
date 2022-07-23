import React,{useContext} from "react";
import Header from "./Header";
import Profile from "./Profile";

// import the provider
import { UserProvider} from "../context/User";
import { ThemeContext, ThemeProvider } from "../context/Theme";

function App() {
  const theme = useContext(ThemeContext);
  return (
    <main className={theme}>
      {/* wrap components */}
      <ThemeProvider>
      <UserProvider>
      <Header  />
      <Profile  />
      </UserProvider>
      </ThemeProvider>
    </main>
  );
}

export default App;
