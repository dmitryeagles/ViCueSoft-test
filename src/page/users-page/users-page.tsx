import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import "./users-page.css";
import { User } from "../../types/common.types";
import { fetchUsers } from "../../api/client.api";
import { UserRow } from "./user.row";

export const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      setUsers(await fetchUsers());
    };
    fetchData().catch((e) => console.error(e));
  }, []);

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
            {users.map((data) => (
              <UserRow user={data} />
            ))}
          </TableBody>
        </Table>
      </Table>
      <Pagination count={3} shape="rounded" sx={{ margin: "20px" }} />
    </TableContainer>
  );
};
