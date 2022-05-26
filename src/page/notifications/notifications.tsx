import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, Button} from '@mui/material'




export const NotificationsRelabs:React.FC = () => {

  return (
    <TableContainer component = {Paper} sx={{marginLeft: '10px', marginRight: '10px', paddingLeft: '10px', paddingRight: '10px'}}>
      <Table>
        <Table aria-label='simple table'>
          <TableHead>
              <TableRow>
                    <TableCell  sx={{ flex: '1 1 100%', fontSize: '20px', padding: '20px'}} align="center" colSpan={5}>
                      События
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Дата</TableCell>
              <TableCell>События</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
                <TableCell>Дата дата</TableCell>
                <TableCell>Какое-то событие</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Дата дата</TableCell>
                <TableCell>Какое-то событие</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Дата дата</TableCell>
                <TableCell>Какое-то событие</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </Table>
    </TableContainer>






  )
}
 