import { Typography } from '@mui/material'
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

function Header({ totalCount }) {
    return (
        <Typography variant="h3" gutterBottom component="h3">
            <FormattedMessage id="app.total-count" />
            {': '}
            {totalCount}
        </Typography>
    )
}

export default memo(Header)

Header.propTypes = {
    totalCount: PropTypes.number.isRequired,
}
