import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  footer: {
    maxWidth: '100%',
    position: 'relative',
    minHeight: 200,
    marginTop: 200,
    backgroundColor: '#ee4035',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  span: {
    color: '#fff',
    fontSize: 30
  }
};

class Footer extends React.Component {
  render() {
    const { classes, count } = this.props;
    return (
      <>
        <footer className={classes.footer}>
          {count ? <p className={classes.span}>{`${count} pokemons`}</p> : ''}
        </footer>
      </>
    );
  }
}

const mapStateToProps = state => ({
  count: state.pokemons.data.count
});

export default connect(mapStateToProps)(withStyles(styles)(Footer));
