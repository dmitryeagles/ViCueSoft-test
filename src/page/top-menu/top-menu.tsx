import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { LoginForm } from '../login-page/login-form';
import { UsersPage } from '../users-page';
import { NotificationsRelabs } from '../notifications';
import { ProductPage } from '../products-page';
import './top-menu.css'
//import UsersPars from '../users-page/users-pars';



interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: ITabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const TopMenu:React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ marginLeft: '40px', marginRight: '40px'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Главная страница" {...a11yProps(0)} />
          <Tab label="Авторизация" {...a11yProps(1)} />
          <Tab label="Карточки товаров" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div className='tableContainer'>
          
          <UsersPage/>
          <NotificationsRelabs/>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className='login-form_page'>
          <LoginForm />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProductPage/>
      </TabPanel>
    </Box>
  );
}