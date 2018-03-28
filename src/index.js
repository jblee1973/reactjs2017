import React from 'react';
import ReactDOM from 'react-dom';
import Dividend from './Dividend';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Dividend />, document.getElementById('root'));
registerServiceWorker();
