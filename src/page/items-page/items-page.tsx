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
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { ItemRow } from "./item";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import "./items-page.css";


export const ItemsPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [page, setPage] = React.useState<number>(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  let navigate = useNavigate();
  const {
    handleSubmit,
    control,
  } = useForm<BeerSearchQuery>({ mode: "onChange" });
  const onSubmit: SubmitHandler<BeerSearchQuery> = (data) => console.log(data);


  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchItems({ page: 1, per_page: 20, name: '' });
      setItems(resp);
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
              <form className="search-form__form" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  control={control}
                  name="name"
                  render={({ field }) => (
                    <TextField
                      label="поиск"
                      type="name"
                      margin="normal"
                      className="login-form__input"
                      onChange={(e) => field.onChange(e)}
                      value={field.value}
                    />
                  )}
                />
                <Button
                  type="submit"
                  variant="contained"
                  disableElevation={true}
                  sx={{ marginTop: 2, padding: "15px 0", marginLeft: "5px"}}
                  onClick={() => navigate("/") }
                >
                  <SearchIcon />
                </Button>
              </form>
            </TableCell>
            <TableRow sx={{ display: "block", fontSize: "1rem" }}>
              {items.map((item) => (
                <ItemRow item={item} />
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </Table>
      <Stack 
        spacing={2}
        sx={{ marginTop: "20px" }}
        >
        <Pagination count={10} page={page} onChange={handleChange} variant="outlined" />
      </Stack>
    </TableContainer>
  );
};
