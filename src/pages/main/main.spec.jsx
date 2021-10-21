import React from 'react'
import { mount } from '@cypress/react'

import { IntlProvider } from 'react-intl'
import en from '@translations/en.json'
import { FETCH_REPOSITORIES } from 'src/api-endpoints'
import Main from './main'

describe('Main', () => {
    function mountComponent() {
        mount(
            <IntlProvider locale="en" messages={en}>
                <Main />
            </IntlProvider>
        )
    }

    it('should render loading indicator', () => {
        cy.intercept('GET', FETCH_REPOSITORIES, {
            statusCode: 401,
        }).as('getReposListWithError')

        mountComponent()

        cy.get('[testid=loading-indicator]').should('exist')
    })

    it('should show an error message', () => {
        cy.intercept('GET', FETCH_REPOSITORIES, {
            statusCode: 401,
        }).as('getReposListWithError')

        mountComponent()

        cy.wait('@getReposListWithError')
            .get('div[role=alert]')
            .contains('Something went wrong')
    })
})
