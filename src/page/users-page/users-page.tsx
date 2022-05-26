import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button} from '@mui/material'
import Pagination from '@mui/material/Pagination';
import DeleteIcon from '@mui/icons-material/Delete';
import './users-page.css'


export const UsersPage:React.FC = () => {

  return (
    
      <TableContainer component = {Paper} sx={{marginLeft: '10px', marginRight: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
        <Table>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell  sx={{ flex: '1 1 100%', fontSize: '20px', padding: '20px'}} align="center" colSpan={5}>
                  Список пользователей
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Имя</TableCell>
                <TableCell>Роль</TableCell>
                <TableCell>Дата создания</TableCell>
                <TableCell>Действие</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Какое-то имя</TableCell>
                  <TableCell>Роль</TableCell>
                  <TableCell>Дата создания</TableCell>
                  <TableCell><Button variant="outlined" size="small" color="error" startIcon={<DeleteIcon />}>Удалить</Button></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Какое-то имя</TableCell>
                  <TableCell>Роль</TableCell>
                  <TableCell>Дата создания</TableCell>
                  <TableCell><Button variant="outlined" size="small" color="error" startIcon={<DeleteIcon />}>Удалить</Button></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Какое-то имя</TableCell>
                  <TableCell>Роль</TableCell>
                  <TableCell>Дата создания</TableCell>
                  <TableCell><Button variant="outlined" size="small" color="error" startIcon={<DeleteIcon />}>Удалить</Button></TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </Table>
          <Pagination count={3} shape="rounded" sx={{margin: '20px'}}/>
      </TableContainer>

      

  )
}
 