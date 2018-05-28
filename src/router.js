import React from 'react';
import PropTypes from 'prop-types';
import {
  Router, Route
} from 'dva/router';
import App from './routes/App'
import NewPage from './routes/NewPage'

function RouterConfig({
  history
}) {
	return (
		<Router history={history}>
			<div>
				<Route path="/newpage" component={NewPage} />
				<Route path="/" exact component={App} />
			</div>
		</Router>
	);
}

RouterConfig.propTypes = {
  history: PropTypes.object.isRequired
};

export default RouterConfig;