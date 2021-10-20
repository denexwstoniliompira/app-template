import React from 'react'
import { mount } from '@cypress/react'
import ListBody from './list-body'

describe('ListBody', () => {
    beforeEach(() => {
        mount(
            <ListBody
                items={[
                    {
                        id: 1,
                        name: 'vgo',
                        htmlUrl: 'https://github.com/golang/vgo',
                        description: '[mirror] Versioned Go Prototype',
                    },
                ]}
            />
        )
    })
    it('should render correct data in the table', () => {
        cy.get('tbody tr').within(() => {
            cy.get('td').eq(0).contains('vgo')
            cy.get('td').eq(1).contains('Link')
            cy.get('td')
                .eq(1)
                .within(() => {
                    cy.get('a[href="https://github.com/golang/vgo"]').should(
                        'exist'
                    )
                })
            cy.get('td').eq(2).contains('[mirror] Versioned Go Prototype')
            cy.get('td')
                .eq(3)
                .get('span')
                .within(() => {
                    cy.get('input[value="1"]').should('exist')
                    cy.get('input[value="2"]').should('exist')
                    cy.get('input[value="3"]').should('exist')
                    cy.get('input[value="4"]').should('exist')
                    cy.get('input[value="5"]').should('exist')
                })
        })
    })
})
