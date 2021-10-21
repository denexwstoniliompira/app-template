import React from 'react'
import { mount } from '@cypress/react'
import RatingColumn from './rating-column'

describe('RatingColumn', () => {
    beforeEach(() => {
        mount(<RatingColumn id={1} />)
    })

    it('should have stars hidden', () => {
        cy.get('input[value="5"]').should('not.not.exist')
    })

    it('should render stars rating', () => {
        cy.get('input[type=checkbox]')
            .check()
            .then(() => {
                cy.get('input[value="5"]').should('exist')
            })
    })
})
