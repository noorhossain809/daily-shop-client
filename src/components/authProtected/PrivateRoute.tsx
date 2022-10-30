import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate , Route } from 'react-router-dom';
import { AppState } from 'redux/store';



const PrivateRoute = ({component: Component, ...rest}: any) => {
    const {data} = useSelector((state: AppState) => state.auth)

    return (
      <Route
      {...rest}
      render={({ location  }: any) =>
      data ? (
        <Component />
        ) : (
          <Navigate 
            to={{
              pathname: "/login",
             
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;