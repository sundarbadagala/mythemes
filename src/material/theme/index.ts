import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  status: {
    danger: '#ff3b29',
    success:'#00a30b',
    warning:'#ff8629',
    info:'#299fff',
    alert:'#fff129'
  },
  palette: {
    primary: {
      main: '#7b29ff',
    },
    secondary: {
      main: "#f829ff",
    },
  },
  components:{
    MuiButton:{
      styleOverrides:{
        root:{
          borderRadius:'10px'
        },
        
      }
    }
  }
});

export default theme;
