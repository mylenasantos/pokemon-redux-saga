import React from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  footer: {
    maxWidth: '100%',
    position: 'relative',
    minHeight: 200,
    marginTop: 50,
    backgroundColor: '#ee4035',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  span: {
    color: '#fff',
    fontSize: 12
  }
};

class Footer extends React.Component {
  state = {
    count: 0
  };

  render() {
    const { classes, count, letters } = this.props;
    return (
      <>
        <footer className={classes.footer}>
          {count ? (
            <p className={classes.span}>{`Um total de ${count} pokemons`}</p>
          ) : (
            ''
          )}
          {letters &&
            letters.length > 0 &&
            letters.map(el => {
              return (
                <p className={classes.span}>
                  {`Existe ${el.count} letras ${el.letter} nessa página`}
                </p>
              );
            })}
        </footer>
      </>
    );
  }
}

const mapStateToProps = store => ({
  count: store.pokemons.data.count,
  letters: store.pokemons.letters
});

export default connect(mapStateToProps)(withStyles(styles)(Footer));
