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
import SearchIcon from "@mui/icons-material/Search";
import { BeerSearchQuery, Item } from "../../types/common.types";
import { fetchItems } from "../../api/client.api";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { ItemRow } from "./item";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./items-page.css";


export const ItemsPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchItems({ page, per_page: 25, name });
      setItems(resp);
    };
    fetchData().catch((e) => console.error(e));
  }, [page, name]);


  return (
    <TableContainer
      component={Paper}
      sx={{
        marginLeft: "10px",
        marginRight: "10px",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingBottom: "20px"
      }}
    >
      <Table>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontSize: "20px",
                  padding: "20px"
                }}
                align="center"
                colSpan={9}
              >
                Закажи пивас! а-то че ты как это...
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            <TableCell sx={{
              padding: '2px',
              display: 'flex',
              alignItems: 'center',
              with: 600,
              justifyContent: 'end',
              marginBottom: '20px'
            }}>
              <form className="search-form__form" >
                <TextField
                  label="поиск"
                  size="small"
                  color="secondary"
                  type="name"
                  sx={{ width: "400px" }}
                  margin="normal"
                  onChange={(e) => {setName(e.target.value); setPage(1)}}
                  value={name}
                />
                {/* <Button
                  type="button"
                  color="secondary"
                  variant="contained"
                  sx={{ marginTop: 2, padding: "7px 0", marginLeft: "5px" }}
                >
                  <SearchIcon />
                </Button> */}
              </form>
            </TableCell>
            <TableRow sx={{ display: "block", fontSize: "1rem" }}>
              {items.map((item) => (
                <ItemRow key={item.id} item={item} />
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </Table>
      <Stack
        spacing={2}
        sx={{ marginTop: "20px" }}
      >
        <Pagination
          count={10}
          page={page}
          onChange={(_, num) => setPage(num)}
          variant="outlined"
        />
      </Stack>
    </TableContainer>
  );
};
