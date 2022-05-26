import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import './product.css'




export const Product = () => {
   
  return (
      
    <Card sx={{  maxWidth: 220, position: 'relative', marginLeft:'10px', marginRight:'10px'}}>

        <div className='imgBox'>
                <CardMedia
                className='itemImg'
                component="img"
                height="80"        
                image="https://atstore.ba/wp-content/uploads/2020/10/1-20.png"
                alt="iphone"
                />
        </div>

        <CardContent>
            <Box
                sx={{            
                margin: '0 10px',
                }}
                >
                <Typography gutterBottom variant="h5"  >
                    <b className='price'>  99 900 ₽ <span> 105 000 ₽</span></b>
                </Typography>
                <Typography variant="body2" color="text.secondary" fontSize= "12px" paddingTop="10px" fontWeight="bold">
                Apple/Смартфон iPhone 13 pro 128Gb / 6.1 / 2532x1170 / OLED /128 Гб
                </Typography>
            </Box>
        </CardContent>
        <Box
          sx={{
            width: 120,
            display: 'flex',
            alignItems: 'center',
            marginLeft: '20px',
            marginBottom: '5px',
            
          }}>
          <Rating
            name="text-feedback"
            value={4.5}
            readOnly
            precision={0.5}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          
        </Box>
        <CardActions>
            <Box
            sx={{            
              marginLeft: '16px'
            }}>
              <Button sx={{background:'linear-gradient(45deg, #ABF000 30%, #FFF700 70%)',
                            border:'0',
                            borderRadius:'20px',
                            height:'30px',
                            padding:'0 10px',
                            width:'150px',
                            fontSize:'12px',
                            color:'#000',
                            fontWeight:'bold'
                          }}>
                Рассрочка 0-0-6
              </Button>
            </Box>
        </CardActions>
        <CardActions>
            <Box
            sx={{            
              marginLeft: '16px',
              
            }}>
              <Button variant="contained" color="primary" >
                    В корзину
              </Button>
              <IconButton  color="primary" aria-label="upload picture" component="span" >
                    <FavoriteBorderIcon  />
              </IconButton>
            </Box>
        </CardActions>
        <CardActions>
            <Box
                sx={{            
                marginLeft: '16px'
                }}>
                <Button sx={{ boxShadow:"0 0px 5px 3px rgba(9, 9, 9, .09)", borderRadius: '20px', height: '30px', padding:'0 10px', width: '120px', fontSize: '10px', color: '#000', textTransform: 'none', opacity: '.6', position: 'absolute', zIndex: '100', top:'25%', left:'20%', background:'white'}}>
                Быстрый просмотр
                </Button>
            </Box>
        </CardActions>          
        <Typography sx={{background:'rgba(242,235,245)',
                            borderRadius:'12px',
                            padding:'0 10px',
                            fontSize:'12px',
                            color:'#C30083',
                            fontWeight:'bold',
                            textTransform:'none',
                            position:'absolute',
                            zIndex:'100',
                            bottom:'48%',
                            left:'15%',
                            
                          }}>
          -14%
        </Typography> 
    </Card>
  )
}
