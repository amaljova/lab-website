import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme(
    {
        palette: {
            primary: {
                main: '#ffffff',
                darker: '#000000',
            },
        },
    }

);


theme = responsiveFontSizes(theme);
export default theme;