import React, { useState } from 'react'
import { Select, MenuItem, AppBar, Toolbar } from '@mui/material'
import { IntlProvider } from 'react-intl'

import en from 'src/translations/en.json'
import gr from 'src/translations/gr.json'
import Main from './pages/main/main'

const LOCALE_OPTIONS = {
    en: 'en',
    gr: 'gr',
}

// this is the main app, usually here we will have providers, initialize stores, router etc
export default function App() {
    const [locale, setLocale] = useState(LOCALE_OPTIONS.en)

    return (
        <IntlProvider
            locale={LOCALE_OPTIONS.en}
            messages={locale === LOCALE_OPTIONS.gr ? gr : en}
        >
            <AppBar position="static">
                <Toolbar
                    sx={{
                        paddingBottom: 2,
                        paddingTop: 2,
                        justifyContent: 'end',
                    }}
                >
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
            <Main />
        </IntlProvider>
    )
}
