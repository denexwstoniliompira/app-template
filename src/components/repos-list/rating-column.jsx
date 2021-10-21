import React, { useState } from 'react'
import { Rating, Checkbox, FormLabel } from '@mui/material'
import PropTypes from 'prop-types'

import usePostRepositoriesStars from '@hooks/usePostRepositoriesStars'

export default function RatingColumn({ id }) {
    const { mutate, rating } = usePostRepositoriesStars(id)
    /* if we have a rating > 0 means that the checkbox should be checked
     * sow showStars is initialized to true. This case happens in the case that
     * we have values in local storage and we refresh the browser
     */
    const [showStars, setShowStars] = useState(() => rating > 0)

    return (
        <FormLabel sx={{ display: 'flex', alignItems: 'center' }}>
            Show stars:
            <Checkbox
                checked={showStars}
                onChange={() => setShowStars((prevStars) => !prevStars)}
            />
            {showStars && (
                <Rating
                    name="repo-rating"
                    value={rating}
                    onChange={(_, newValue) => mutate({ value: newValue })}
                />
            )}
        </FormLabel>
    )
}
RatingColumn.propTypes = {
    id: PropTypes.number.isRequired,
}
