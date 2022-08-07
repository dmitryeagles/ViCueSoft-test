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
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Item } from "../../types/common.types";
import { fetchItemsOff } from "../../api/client.api";
import { ItemRow } from "./item";
import "./items-page.css";


export const ItemsPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      setItems(await fetchItemsOff());
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
                colSpan={9}
              >
                Закажи пивас! а-то че ты как это...
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableCell sx={{p: '2px 4px', display: 'flex', alignItems: 'center', with: 600, justifyContent:'end'}}>
              <InputBase
              sx={{p: '2px 4px', display: 'flex', alignItems: 'center', with: 600}}
              placeholder="Поискать пивас.."
              inputProps={{ 'aria=lable': 'поискать пивас...'}}
              />
              <IconButton type="submit" sx={{ p:'10px' }} aria-label="search">
                <SearchIcon/>
              </IconButton>
            </TableCell>
            <div className="product-page__container">
              {items.map((item) => (
                <ItemRow item={item}/>
              ))}
            </div>
          </TableBody>
        </Table>
      </Table>
      
    </TableContainer>
  );
};
