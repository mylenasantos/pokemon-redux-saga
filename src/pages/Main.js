import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
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
  state = {
    activePage: 0
  };

  componentDidMount() {
    this.props.pokemonRequest();
  }

  render() {
    const { classes, pokemons } = this.props;
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
          </Table>
        </main>
      </>
    );
  }
}
const mapStateToProps = state => ({
  pokemons: state.pokemons,
  page: state.pokemons.page
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(pokemonsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Main));
