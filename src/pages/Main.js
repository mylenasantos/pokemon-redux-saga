import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import api from '../services/api';
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
  state = {
    activePage: 0
  };

  componentDidMount() {
    let { activePage } = this.state;
    this.props.pokemonsActions.getPokemonRequest(api, activePage);
  }

  handleChangePage = (event, page) => {
    this.setState({ activePage: page }, () => {
      this.props.pokemonsActions.getPokemonRequest(api, this.state.activePage);
    });
  };

  render() {
    const { classes, pokemons } = this.props;
    const { activePage } = this.state;
    return (
      <>
        <header className={classes.header}>
          <img src={pokebola} alt="pikachu" className={classes.img} />
        </header>
        <main className={classes.container}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableCell}>Nome</TableCell>
                <TableCell className={classes.tableCell}>
                  Mais detalhes
                </TableCell>
              </TableRow>
            </TableHead>
            {pokemons &&
              pokemons.data.results &&
              pokemons.data.results.map(el => {
                return (
                  <TableBody key={Math.random()}>
                    <TableRow>
                      <TableCell className={classes.tableCell}>
                        {el.name}
                      </TableCell>
                      <TableCell className={classes.tableCell}>
                        <Button
                          component="a"
                          variant="contained"
                          href={el.url}
                          color="primary"
                        >
                          Detalhes
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                );
              })}
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={3}
                  count={pokemons && pokemons.data.count}
                  rowsPerPage={10}
                  page={activePage}
                  SelectProps={{
                    native: true
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </main>
      </>
    );
  }
}
const mapStateToProps = store => ({
  pokemons: store.pokemons
});

const mapDispatchToProps = dispatch => {
  return {
    pokemonsActions: bindActionCreators(pokemonsActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Main));
