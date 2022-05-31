import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { collectNotifications } from "../../api/client.api";
import { Notification } from "../../types/common.types";

export const NotificationsRelabs: React.FC = () => {
  const [data, setData] = useState<Notification[]>([]);

  useEffect(() => {
    const socket = new WebSocket("wss://test.relabs.ru/event");
    collectNotifications(socket, (n: Notification) => setData((prev) => [...prev, n])) 
  }, []);

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
                События
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Дата</TableCell>
              <TableCell>Событие</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((item, key) => (
                <TableRow key={key}>
                  <TableCell>{item.ctime.toString()}</TableCell>
                  <TableCell>{item.event}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Table>
    </TableContainer>
  );
};
