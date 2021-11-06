import { indigo, grey,  } from '@mui/material/colors';


// declare module '@mui/material' {
//   interface ThemeOptions {    
//     themeName?: string,
//     mode?: string
//   }
// }

export const lightTheme = {
  palette: {
    background: {
      default: '#c4c4c4',
    },
    primary: {
      main: indigo[500],
      ligth: '#fff',
      dark: indigo[700],
    },
    secondary: {
      main: '#f30000'
    }
  },
};

export const darkTheme = {
  palette: {
    background: {
      default: '#121212'
    },
    primary: {
      main: grey[800],
      ligth: grey[300],
      contrastText: '#f3000'
    },
    text: {
      // primary: '#fff',
      secondary: '#fff'
    },
  },
}
