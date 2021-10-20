import React from 'react'
import { mount } from '@cypress/react'

import Main from './main'
import { FETCH_REPOSITORIES } from '../../api-endpoints'

import { IntlProvider } from 'react-intl'
import en from '../../translations/en.json'

describe('Main', () => {
    it('should render loading indicator', () => {
        cy.intercept('GET', FETCH_REPOSITORIES, {
            statusCode: 401,
        }).as('getReposListWithError')

        mount(
            <IntlProvider locale="en" messages={en}>
                <Main />
            </IntlProvider>
        )
        cy.get('[testid=loading-indicator]').should('exist')
    })

    it('should show an error message', () => {
        cy.intercept('GET', FETCH_REPOSITORIES, {
            statusCode: 401,
        }).as('getReposListWithError')

        mount(
            <IntlProvider locale="en" messages={en}>
                <Main />
            </IntlProvider>
        )
        cy.wait('@getReposListWithError')
            .get('div[role=alert]')
            .contains('Something went wrong')
    })

    it('should render correct table header cells', () => {
        cy.intercept(FETCH_REPOSITORIES).as('getReposList')

        mount(
            <IntlProvider locale="en" messages={en}>
                <Main />
            </IntlProvider>
        )

        cy.wait('@getReposList')
            .get('thead')
            .within(() => {
                const row = cy.get('tr').children()
                const values = [
                    'Name',
                    'Github Link',
                    'Description',
                    'No. Stars',
                ]
                row.each(($child, index) => {
                    expect($child).to.have.text(values[index])
                })
            })
    })
})
