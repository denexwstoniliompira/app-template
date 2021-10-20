import React from 'react'
import { mount } from '@cypress/react'
import RatingColumn from './rating-column'

describe('RatingColumn', () => {
    it('should', () => {
        mount(<RatingColumn id={1} />)
        cy.get('input[value="5"]').should('exist')
    })
})
