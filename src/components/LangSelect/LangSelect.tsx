import React from 'react';
import { Collapse, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const LangSelect: React.FC = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Box onClick={() => setOpen(!open)}>
      <Box sx={{ textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        { i18n.language }
        <Box sx={{ marginLeft: '5px' }}>
          <img src={`/images/lang/${i18n.language}.png`} alt={i18n.language} style={{ height: '11px' }} />
        </Box>
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit sx={{ position: 'absolute', zIndex: 100 }}>
        <Box sx={{ padding: '5px', borderRadius: '4px', bgcolor: 'primary.light' }}>
          {
            Object.keys(i18n.services.resourceStore.data).map(lang => {
              if (i18n.language !== lang) {
                return (<Box sx={{
                              cursor: 'pointer',
                              textTransform: 'uppercase',
                              minWidth: '35px'
                            }}
                            key={lang}
                            onClick={() => i18n.changeLanguage(lang)}
                          >
                            {lang}
                          </Box>)
              }
              return ''
            })
          }
        </Box>
      </Collapse>
    </Box>
  )
}

export default LangSelect