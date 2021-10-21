import { TableBody, TableCell, TableRow } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'
import RatingColumn from './rating-column'

export default function ListBody({ items }) {
    return (
        <TableBody>
            {items.map(({ name, htmlUrl, description, id }) => (
                <TableRow key={id}>
                    <TableCell>{name}</TableCell>
                    <TableCell>
                        <a href={htmlUrl}>Link</a>
                    </TableCell>
                    <TableCell>{description}</TableCell>
                    <TableCell sx={{ minWidth: 250 }}>
                        <RatingColumn id={id} />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}

ListBody.defaultProps = {
    items: [],
}

ListBody.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            htmlUrl: PropTypes.string,
            description: PropTypes.string,
        }).isRequired
    ),
}
