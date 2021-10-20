import React from 'react'
import { mount } from '@cypress/react'
import { IntlProvider } from 'react-intl'
import Header from './header'

import en from '../../translations/en.json'

describe('Header', () => {
    it('Should show total count words', () => {
        mount(
            <IntlProvider locale="en" messages={en}>
                <Header totalCount={0} />
            </IntlProvider>
        )
        cy.get('h3').contains('Total count:')
    })

    it('Should show  total count as 5', () => {
        mount(
            <IntlProvider locale="en" messages={en}>
                <Header totalCount={5} />
            </IntlProvider>
        )

        cy.get('h3').contains('Total count: 5')
    })
})
