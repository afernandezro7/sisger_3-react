// import React from 'react';
// import PropTypes from 'prop-types';

// import { Route, Redirect } from 'react-router-dom';

// interface PrivateRouteProps {
//     isLogged:boolean;
//     component: () => JSX.Element,
// }

// export const PrivateRoute = ({
//     isLogged,
//     component: Component,
//     ...rest
// }:PrivateRouteProps) => {


//     return (
//         <Route 
//             { ...rest }
//             component={ (props) => (
//                 ( isLogged )
//                     ? ( <Component { ...props } /> )
//                     : ( <Redirect to="/login" exact/> )
//             )}

//         />
//     )
// }

// PrivateRoute.propTypes = {
//     isLogged: PropTypes.bool.isRequired,
//     component: PropTypes.func.isRequired
// }

import React from 'react'

export const PrivateRoute = () => {
    return (
        <div>

        </div>
    )
}
