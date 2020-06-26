import React from 'react';
import Button from '@material-ui/core/Button';

class Pagination extends React.Component {
  state = {};

  render() {
    return (
      <>
        {this.props.goPrevPage && (
          <Button component="a" href={this.props.goPrevPage}>
            Previous
          </Button>
        )}
        {this.props.goNextPage && (
          <Button component="a" href={this.props.goNextPage}>
            Next
          </Button>
        )}
      </>
    );
  }
}

export default Pagination;
