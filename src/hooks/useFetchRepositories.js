import { useEffect, useReducer } from 'react'
import { FETCH_REPOSITORIES } from '../api-endpoints'

const REDUCER_STATES = {
    isLoading: 'LOADING',
    success: 'SUCCESS',
    error: 'ERROR',
}

function reducer(state, action) {
    switch (action.type) {
        case REDUCER_STATES.isLoading: {
            return { ...state, isLoading: true }
        }
        case REDUCER_STATES.success: {
            return { ...state, isLoading: false, data: action.payload }
        }
        case REDUCER_STATES.error: {
            return { ...state, isLoading: false, error: 'error' }
        }
        default: {
            return state
        }
    }
}

// in a real application I would probably have used react-query. I believe this is one of the cases that we don't need to re-invent the wheel for data fetching.
export default function useFetchRepositories() {
    // I used reducer to avoid having multiple setState on after another. (Although this should not matter to React according to the docs)
    const [state, dispatch] = useReducer(reducer, {
        isLoading: false,
        data: { totalCount: 0, items: [] },
        error: null,
    })

    useEffect(() => {
        // this is to avoid an error that is happening, if we try to setState after the component is unmounted (useState is essentially useReducer under the hood)
        let isMounted = true

        if (isMounted) {
            dispatch({ type: REDUCER_STATES.isLoading })
            fetch(FETCH_REPOSITORIES)
                .then((resp) => resp.json())
                .then((repos) =>
                    dispatch({
                        type: REDUCER_STATES.success,
                        payload: {
                            totalCount: repos.total_count,
                            // it's better for debugging purposes to only take what we need
                            items: repos.items.map(
                                ({ id, name, html_url, description }) => ({
                                    id,
                                    name,
                                    htmlUrl: html_url,
                                    description,
                                })
                            ),
                        },
                    })
                )
                .catch((_) => dispatch({ type: REDUCER_STATES.error }))
        }

        return () => {
            isMounted = false
        }
    }, [])

    return state
}
