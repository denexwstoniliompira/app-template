import React from 'react'
import { mount } from '@cypress/react'
import { IntlProvider } from 'react-intl'
import en from '@translations/en.json'
import Header from './header'

describe('Header', () => {
    function mountComponent(props) {
        const { totalCount } = props

        mount(
            <IntlProvider locale="en" messages={en}>
                {/* There is an eslint rule to prohibit spreading. I like this approach as in my experience it makes code more explicit and easier to reason about */}
                <Header totalCount={totalCount} />
            </IntlProvider>
        )
    }

    it('Should show total count words', () => {
        mountComponent({ totalCount: 0 })

        cy.get('h3').contains('Total count:')
    })

    it('Should show  total count as 5', () => {
        mountComponent({ totalCount: 5 })

        cy.get('h3').contains('Total count: 5')
    })
})
