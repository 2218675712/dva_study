import dva from 'dva';
import './index.css';

//todo   不能安装5版本
// 1. Initialize
import {createBrowserHistory} from 'history';
const app = dva({
  history: createBrowserHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/indexTest').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
