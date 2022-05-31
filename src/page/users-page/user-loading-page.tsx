import React from 'react'
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
  } from "@mui/material";

export const UserLoadingPage = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        marginLeft: "10px",
        marginRight: "10px",
        paddingLeft: "10px",
        paddingRight: "10px",
      }}
    >
      <Table>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ flex: "1 1 100%", fontSize: "20px", padding: "20px" }}
                align="center"
                colSpan={5}
              >
                Список пользователей
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Имя</TableCell>
              <TableCell>Роль</TableCell>
              <TableCell>Дата создания</TableCell>
              <TableCell>Действие</TableCell>
            </TableRow>
          </TableHead>
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
