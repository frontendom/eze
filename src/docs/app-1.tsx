import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { colors } from '../internal/styles';

ReactDOM.render(
  <h1 style={{color: colors.text}}>Hello World</h1>,
  document.getElementById('root')
);