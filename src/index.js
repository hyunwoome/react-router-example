import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);

// ! react-router
/* 

history API = <BrowserRouter>
history.push = <Link>
history.replace = <Redirect>

<Route> => Matched re-rendered
<Link> => Navigation (without refresh)
<a> => Navigation (refresh)
*/
