import React from 'react';
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
    const { classes } = this.props;
    return (
      <>
        <footer className={classes.footer}>
          <p className={classes.span}>Teste</p>
        </footer>
      </>
    );
  }
}

export default withStyles(styles)(Footer);
