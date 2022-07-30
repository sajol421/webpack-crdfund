import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header1";
const theme={
  colors:{
    header:"#F8F8F6",
    main:"red",
    footer:"#D052DE",
  },
  mobile:"820px",
}
const App = () => {
  return (  
    
    <ThemeProvider theme={theme}> 
        <Header/> 
    </ThemeProvider>
    

    
    
  );
};

export default App;
