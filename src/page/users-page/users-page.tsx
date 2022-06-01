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
import { User } from "../../types/common.types";
import { fetchUsers } from "../../api/client.api";
import { UserRow } from "./user.row";
import { UserLoadingPage } from "./user-loading-page";
import CustomPagination from "./custom-pagination";
import "./users-page.css";

export const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrenPage] = useState(1);

  const removeRow = (id: number): void => {
    setUsers(users.filter(user => user.id !== id))
  }

 
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const resp = await fetchUsers(currentPage);
      setUsers(resp.items);
      setTotal(resp.total);
      setLoading(false);
    };
    fetchData().catch((e) => console.error(e));
  }, [currentPage]);

  const onPage = (page:number) => setCurrenPage(page);

  if (loading) {
    return <UserLoadingPage />;
  }

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
              <UserRow user={data} removeRow={removeRow} />
            ))}
          </TableBody>
        </Table>
      </Table>
      <CustomPagination
        perPage={5}
        total={total}
        onPage={onPage}
      />
     
    </TableContainer>
  );
};
