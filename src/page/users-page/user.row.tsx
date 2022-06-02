import React from "react";
import { Button, TableCell, TableRow } from "@mui/material";
import { format } from "date-fns";
import { User } from "../../types/common.types";
import DeleteIcon from "@mui/icons-material/Delete";



export type UserRowProps = { user: User; removeRow: (id: number) => void };

export const UserRow: React.FC<UserRowProps> = ({ user, removeRow}) => {

  return (
    <TableRow key={user.id}>
      <TableCell>{user.id}</TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.role}</TableCell>
      <TableCell>{format(new Date(user.ctime * 1000), "dd.MM.yyyy HH:mm")}</TableCell>
      <TableCell>
        <Button
          variant="outlined"
          size="small"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={()=> removeRow(user.id)}
        >
          Удалить
        </Button>
      </TableCell>
    </TableRow>
  );
};
