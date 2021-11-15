import React from "react";
import { Box, Typography } from "@mui/material";

const AppFooter:React.FC = () => {
  return(
    <footer>
      <Box sx={{ bgcolor: 'primary.dark', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography sx={{ fontFamily: "'Fruktur', cursive", color: '#fff', fontSize: '30px' }}>
          &copy;2021 cinema
        </Typography>
      </Box>
    </footer>
  )
}

export default AppFooter