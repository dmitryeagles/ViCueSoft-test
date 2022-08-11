import React from "react";
import { Item } from "../../types/common.types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import IconButton from '@mui/material/IconButton';
import Box from "@mui/material/Box";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

export type ItemRowProps = { item: Item };

export const ItemRow: React.FC<ItemRowProps> = ({ item }) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card
      sx={{
        width: "18%",
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
          alt="Картинка пива не пришла. Сегодня я за нее..."
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
            onClick={handleClickOpen}
          >
            Полное описание...
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle 
              sx={{
                  margin: "0 auto",
                }}>
                {item.name}
            </DialogTitle>
            <DialogContent 
              sx={{
                borderBottom: 1,
                margin: "0 20px"
              }}>
              <Box sx={{
                margin: "10px 20px",
                float: "left",
                borderColor: "divider",
                position: "relative"
              }}>
                <CardMedia
                  sx={{
                    height: "300px",
                    width: "auto",
                    padding: "10px"
                  }}
                  component="img"
                  height="180"
                  image={item.image_url}
                  alt="Картинка пива не пришла. Сегодня я за нее..."
                />
                <Button 
                  sx={{
                    position: "absolute",
                    bottom: "5px",
                    right: "-20px",
                    backgroundColor: "whitesmoke"
                  }}
                  variant="outlined"
                  color="primary" 
                  size="small"
                >
                  Alcohol: {item.abv}%
                </Button>
              </Box>
              <Box sx={{
                margin: "20px 5px",
                float: "right",
                width: "50%",
                textAlign: "end"
              }}>
                {item.description}
              </Box>
            </DialogContent>
            <DialogContent 
              sx={{
                borderBottom: "1px",
                margin: "0 10px"
              }}>
                <Box sx={{
                margin: "0 auto"
              }}>
                {item.tagline}
              </Box>
            </DialogContent>
            <DialogContent>
              <Div>
                "Сompatibility with food: "{item.food_pairing}
              </Div>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </Dialog>
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


