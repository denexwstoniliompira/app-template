import React from 'react'

import ReposList from '@components/repos-list/list'
import { Alert, CircularProgress, Paper } from '@mui/material'
import useFetchRepositories from '../../hooks/useFetchRepositories'

export default function Main() {
    const {
        isLoading,
        error,
        data: { items, totalCount },
    } = useFetchRepositories()

    if (isLoading) {
        return <CircularProgress testid="loading-indicator" />
    }

    // in a real world scenario error will hold a message that it's going to be displayed
    if (error) {
        return <Alert severity="error">Something went wrong...</Alert>
    }
    return (
        <Paper sx={{ margin: 2, padding: 4 }}>
            <ReposList.Header totalCount={totalCount} />
            <ReposList>
                {/* this method gives us the freedom to add more children in the future, eg pagination */}
                <ReposList.Body items={items} />
            </ReposList>
        </Paper>
    )
}
