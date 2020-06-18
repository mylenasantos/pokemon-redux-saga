import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import pokebola from '../image/pokebola.png';
import { withStyles } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';

const styles = () => ({
  header: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 40
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  img: {
    width: 300,
    height: 300,
    borderRadius: '50%'
  },
  table: {
    maxWidth: '500px'
  },
  tableCell: {
    textAlign: 'center'
  }
});
class Main extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <>
        <header className={classes.header}>
          <img src={pokebola} alt="pikacu" className={classes.img} />
        </header>
        <main className={classes.container}>
          <Table className={classes.table}>
            <TableHead>
              <TableCell className={classes.tableCell}>Nome</TableCell>
              <TableCell className={classes.tableCell}>Detalhe</TableCell>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className={classes.tableCell}>Pokemon</TableCell>
                <TableCell className={classes.tableCell}>
                  url do pokemon
                </TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={3}
                  count={1}
                  rowsPerPage={10}
                  page={1}
                  SelectProps={{
                    native: true
                  }}
                  // onChangePage={this.handleChangePage}
                  // onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  // ActionsComponent={TablePaginationActionsWrapped}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </main>
      </>
    );
  }
}
export default withStyles(styles)(Main);
