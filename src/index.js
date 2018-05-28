import registerServiceWorker from './registerServiceWorker'
import dva from 'dva'
import { browserHistory } from 'dva/router';
import count from './models/count'
import router from './router'

// 1. Initialize
const app = dva({
  history:browserHistory,
  onError(error) {
    console.error(error.stack);
  },
});

// 2. Plugins

// 3. Model
app.model(count)

// 4. Router
app.router(router);

// 5. Start
app.start('#root');

registerServiceWorker();
