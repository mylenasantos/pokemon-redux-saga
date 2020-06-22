import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
// import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as pokemonsActions } from '../store/ducks/pokemons';
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

  componentDidMount() {
    this.props.pokemonRequest();
  }

  render() {
    const { classes } = this.props;
    const { pokemons } = this.props;

    console.log(pokemons)
    return (
      <>
        <header className={classes.header}>
          <img src={pokebola} alt="pikacu" className={classes.img} />
        </header>
        <main className={classes.container}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableCell}>Nome</TableCell>
                <TableCell className={classes.tableCell}>Detalhe</TableCell>
              </TableRow>
            </TableHead>
            {pokemons && pokemons.results && pokemons.results.map((el) => {
              return (
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableCell}>{el.name}</TableCell>
                    <TableCell className={classes.tableCell}>{el.url}</TableCell>
                  </TableRow>
                </TableBody>
              )
            })}
            <TableFooter>
              <TableRow>
                {/* <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={3}
                  count={1}
                  rowsPerPage={10}
                  page={1}
                  SelectProps={{
                    native: true
                  }}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActionsWrapped}
                /> */}
              </TableRow>
            </TableFooter>
          </Table>
        </main>
      </>
    );
  }
}
const mapStateToProps = state => ({
  pokemons: state.pokemons
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(pokemonsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Main));
