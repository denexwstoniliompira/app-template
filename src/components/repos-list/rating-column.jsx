import React from 'react'
import { Rating } from '@mui/material'
import PropTypes from 'prop-types'

import usePostRepositoriesStars from '@hooks/usePostRepositoriesStars'

export default function RatingColumn({ id }) {
    const { mutate, rating } = usePostRepositoriesStars(id)

    return (
        <Rating
            name="repo-rating"
            value={rating}
            onChange={(event, newValue) => mutate({ value: newValue })}
        />
    )
}
RatingColumn.propTypes = {
    id: PropTypes.number.isRequired,
}
