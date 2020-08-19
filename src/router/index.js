// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// const routes = [
//   {
//     path: "/home",
//     component: Sandwiches
//   },
//   {
//     path: "/news",
//     component: Bus
//   },
//   {
//     path: "/user",
//     component: Cart
//   },
//   {
//     path: "/houses",
//     component: Tacos,
//     routes: [
//       {
//         path: "/house/my",
//         component: Cart
//       }
     
//     ]
//   }
// ]

// function RouteWithSubRoutes(route) {
//   return (
//     <Route
//       path={route.path}
//       render={props => (
//         // pass the sub-routes down to keep nesting
//         <route.component {...props} routes={route.routes} />
//       )}
//     />
//   );
// }
