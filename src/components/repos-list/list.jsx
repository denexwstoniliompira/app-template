import React from 'react'

import { Table, TableCell, TableHead, TableRow } from '@mui/material'
import PropTypes from 'prop-types'
import Header from './header'
import ListBody from './list-body'

function ReposList({ children }) {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Github Link</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>No. Stars</TableCell>
                </TableRow>
            </TableHead>
            {children}
        </Table>
    )
}

ReposList.propTypes = {
    children: PropTypes.node.isRequired,
}

ReposList.Header = Header
ReposList.Body = ListBody

export default ReposList
