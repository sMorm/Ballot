import React from 'react';
import ReactDOM from 'react-dom';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch
// } from 'react-router-dom'


import App from './components/App';
// import NotFound from './components/NotFound'

import './index.css';


// const Root = () => {
//     return(
//         <Router>
//           <div>
//             <Switch>
//                 <Route exact path="/" component={App}/>
//                 <Route path="*" component={NotFound}/>
//             </Switch>
//           </div>
//         </Router>
//     )
// }

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);













// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Match, Miss } from 'react-router';


// import App from './components/App';
// import NotFound from './components/NotFound'
// import Test from './components/InputForm'

// import './index.css';


// const Root = () => {
//     return(
//     <BrowserRouter>
//         <div>
//             <Match exactly pattern="/"  component={App} />
//             <Match pattern="/test" component={Test} />
//             <Miss component={NotFound} />
//         </div>
//     </BrowserRouter>
//     )
// }

// ReactDOM.render(
//   <Root/>,
//   document.getElementById('root')
// );
