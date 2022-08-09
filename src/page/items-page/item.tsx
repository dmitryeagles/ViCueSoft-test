import React from "react";
import { Item } from "../../types/common.types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";


export type ItemRowProps = { item: Item };

export const ItemRow: React.FC<ItemRowProps> = ({ item }) => {
  return (
    <Card
      sx={{
        width: "23%",
        float: "left",
        margin: " 0 1%",
        marginTop: "25px"
      }}
    >
      <Box sx={{
        margin: "10px 20px",
        borderBottom: 1,
        borderColor: "divider",
      }}>
        <CardMedia
          sx={{
            height: "300px",
            width: "auto",
            margin: "0 auto",
            padding: "10px"
          }}
          component="img"
          height="180"
          image={item.image_url}
          alt="Картинка пиваса"
        />
      </Box>
      <CardContent sx={{ paddingBottom: "0" }}>
        <Box
          sx={{
            margin: "0 10px",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            fontSize="14px"
            fontWeight="bold"
            minHeight="50px"
          >
            {item.name}
          </Typography>
        </Box>
      </CardContent>
      <CardContent sx={{ paddingBottom: "5px" }}>
        <Box
          sx={{
            margin: "0 10px",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitLineClamp: 3,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",

            }}
            color="text.secondary"
            maxWidth="200px"
            width="80%"
            fontSize="14px"
            fontWeight="100"
          >
            {item.description}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ padding: "0 26px" }}>
        <Box
        >
          <Button
            sx={{
              background: "white",
              fontSize: "10px",
              fontWeight: "100",
              padding: '0'
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


