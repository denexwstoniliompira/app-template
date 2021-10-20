import React, { useState } from 'react'
import { Select, MenuItem, AppBar, Toolbar, Box } from '@mui/material'
import { IntlProvider } from 'react-intl'
import Main from './pages/main/main'

import en from './translations/en.json'
import gr from './translations/gr.json'

// this is the main app, usually here we will have providers, initialize stores, router etc
export default function App() {
    const [locale, setLocale] = useState('en')

    return (
        <IntlProvider locale="en" messages={locale === 'en' ? en : gr}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar sx={{ paddingBottom: 2, paddingTop: 2 }}>
                        <Select
                            value={locale}
                            label="Language"
                            onChange={(event) => setLocale(event.target.value)}
                            sx={{ color: 'white' }}
                        >
                            <MenuItem value="en">English</MenuItem>
                            <MenuItem value="gr">Greek</MenuItem>
                        </Select>
                    </Toolbar>
                </AppBar>
            </Box>
            <Main />
        </IntlProvider>
    )
}
