import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme(
    {
        palette: {
            primary: {
                main: '#ffffff',
                darker: '#000000',
            },
        },
        typography: {
            fontFamily: [
            //   "Nunito",
            //   "Roboto",
            //   "Helvetica Neue",
            //   "Arial",
            //   "sans-serif",
              "Poppins",
            ].join(",")
          }
    }

);


theme = responsiveFontSizes(theme);
export default theme;