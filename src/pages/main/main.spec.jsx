import React from 'react'
import { mount } from '@cypress/react'

import Main from './main'
import { FETCH_REPOSITORIES } from '../../api-endpoints'

describe('Main', () => {
    it('should render loading indicator', () => {
        cy.intercept('GET', FETCH_REPOSITORIES, {
            statusCode: 401,
        }).as('getReposListWithError')

        mount(<Main />)
        cy.get('[testid=loading-indicator]').should('exist')
    })

    it('should show an error message', () => {
        cy.intercept('GET', FETCH_REPOSITORIES, {
            statusCode: 401,
        }).as('getReposListWithError')

        mount(<Main />)
        cy.wait('@getReposListWithError')
            .get('div[role=alert]')
            .contains('Something went wrong')
    })

    it('should render correct table header cells', () => {
        cy.intercept(FETCH_REPOSITORIES).as('getReposList')

        mount(<Main />)

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
