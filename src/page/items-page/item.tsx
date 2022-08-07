import React from "react";
import { Item } from "../../types/common.types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";


export type ItemRowProps = { item: Item };

export const ItemRow: React.FC<ItemRowProps> = ({ item }) => {
  return (
    <Card
      sx={{
        maxWidth: 220,
        position: "relative",
        margin: "10px",
      }}
    >
      <div className="imgBox">
        <CardMedia
          className="itemImg"
          component="img"
          height="80"
          image={item.image_url}
          alt="Картинка пиваса"
        />
      </div>

      <CardContent>
        <Box
          sx={{
            margin: "0 10px",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            fontSize="14px"
            paddingTop="30px"
            fontWeight="bold"
          >
            {item.description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            marginLeft: "15px",
          }}
        >
          <Button
            sx={{
              background: "white",
              fontSize: "12px"
            }}
          >
            Полное описание...
          </Button>
        </Box>
      </CardActions>
      <CardActions>
        <Box
          sx={{
            marginLeft: "16px",
            marginRight: "16px",
            marginBottom: "15px",
            width: "100%",
          }}
        >
          <Button 
            sx={{
              width: "100%",
            }}
            variant="contained" 
            color="secondary"
          >
            В корзину
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};


