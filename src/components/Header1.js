import React, { useState } from "react";
import Header1 from "./Header";

import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  TextField,
} from "@mui/material";
import { AiOutlineWallet } from "react-icons/ai";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ padding: "4px" }}>
        <Toolbar >
          <AddBusinessRoundedIcon sx={{ transform: "scale(2)",marginLeft: "15px"}} />
          {isMatch ? (
            <>

              <div >
                <TextField sx={{ backgroundColor: "white", marginLeft: "20%",alignItems: "center" }} id="outlined-basic" label="search" variant="outlined" />
              </div>
              <DrawerComp />

            </>
          ) : (
            <>
              <TextField sx={{ backgroundColor: "white", marginLeft: "auto", width: "22%" }} id="outlined-basic" label="search" variant="outlined" />
              <Tabs

                sx={{ marginLeft: "auto", color: "white", }}

                value={value}
                onChange={(e, value) => setValue(value)}
              > 
                <Tab sx={{ color: "white", fontWeight: "bold", }} label="Explore" />
                <Tab sx={{ color: "white", fontWeight: "bold" }} label="Market" />
                <Tab sx={{ color: "white", fontWeight: "bold" }} label="about" />
                <Tab sx={{ color: "white", fontWeight: "bold" }} label="create" />
                <Tab sx={{ color: "white", fontWeight: "bold" }} label="wallet" /><AiOutlineWallet sx={{ Top:"10px"}} />  
               
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>

            </>

          )}

        </Toolbar>

      </AppBar>
      <Header1 />
    </React.Fragment>

  );
};

export default Header;