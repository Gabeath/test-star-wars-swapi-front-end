import React, { useCallback, useEffect, useState } from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow
} from '@mui/material'

import { getPeople, Person } from '../services/people'

const People = () => {
  const [rows, setRows] = useState<Person[]>([])
  const [count, setCount] = useState<number>(0)
  const [page, setPage] = useState<number>(1)

  const fetchMyAPI = useCallback(async () => {
    const peoplePaginated = await getPeople(page)
    setCount(peoplePaginated?.count || 0)
    setRows(peoplePaginated?.results || [])
  }, [])

  useEffect(() => {
    fetchMyAPI()
  }, [])

  const getPagePeople = useCallback(async (pageNumber: number) => {
    const peoplePaginated = await getPeople(pageNumber)
    setRows(peoplePaginated?.results || [])
  }, [])

  const handleChangePage = (pageNumber: number) => {
    if (pageNumber) {
      setPage(pageNumber)
      getPagePeople(pageNumber)
    }
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Data de nascimento</TableCell>
              <TableCell>Cor do(s) olho(s)</TableCell>
              <TableCell>Gênero</TableCell>
              <TableCell>Cor do cabelo</TableCell>
              <TableCell>Altura (cm)</TableCell>
              <TableCell>Peso (kg)</TableCell>
              <TableCell>Cor da pele</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.birth_year}</TableCell>
                <TableCell>{row.eye_color}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.hair_color}</TableCell>
                <TableCell>{row.height}</TableCell>
                <TableCell>{row.mass}</TableCell>
                <TableCell>{row.skin_color}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                count={count}
                onPageChange={(event, newPage) => handleChangePage(newPage + 1)}
                page={page - 1}
                rowsPerPage={10}
                rowsPerPageOptions={[10]}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  )
}

export default People
