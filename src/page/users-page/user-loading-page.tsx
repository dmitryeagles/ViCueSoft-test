import React from 'react'
import {
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Paper,
  } from "@mui/material";

export const UserLoadingPage:React.FC = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        marginLeft: "10px",
        marginRight: "10px",
        paddingLeft: "10px",
        paddingRight: "10px",
        height: '68vh'
      }}
    >
      <Table>
        <Table aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell align="center" colSpan={5}>Загрузка...</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Table>
    </TableContainer>
      )
    }
