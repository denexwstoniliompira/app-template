import { mount } from '@cypress/react'
import React from 'react'
import ReposList from './list'

describe('ReposList', () => {
    beforeEach(() => {
        mount(<ReposList />)
    })

    it('should render correct table header cells', () => {
        cy.get('thead').within(() => {
            const row = cy.get('tr').children()
            const values = ['Name', 'Github Link', 'Description', 'No. Stars']
            row.each(($child, index) => {
                expect($child).to.have.text(values[index])
            })
        })
    })
})
