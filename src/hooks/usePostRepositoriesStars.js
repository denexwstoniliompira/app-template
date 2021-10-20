import { useState } from 'react'

export default function usePostRepositoriesStars(id) {
    /* we try to find if there is a rating for current id inside local storage.
     if we don't find anything then we initialize to 0. In real world of course, the stars rating should be part
     of the api request in GET
     */
    const [rating, setRating] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('data')).find(
                (re) => re.id === id
            ).rating
        } catch (e) {
            return 0
        }
    })

    return {
        mutate({ value }) {
            setRating(value)
            // here in a real world we will have a fetch request

            // try to read ratings from local storage and filter out the current one
            let ratings =
                localStorage.getItem('data') &&
                JSON.parse(localStorage.getItem('data')).filter(
                    (r) => r.id !== id
                )

            // if we don't find any ratings in local storage then initialize to empty array
            if (!ratings) {
                ratings = []
            }

            localStorage.setItem(
                'data',
                JSON.stringify([...ratings, { id, rating: value }])
            )
        },
        rating,
    }
}
