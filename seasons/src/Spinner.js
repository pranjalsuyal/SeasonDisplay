import React from 'react';

const Spinner = (props) => {
    return(
        <div class="ui active dimmer">
        <div class="ui big text loader">{props.text}</div>
      </div>
    );
};

Spinner.defaultProps = {
    text:'Loading...'
};

export default Spinner;