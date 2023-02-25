import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, useNavigate  } from 'react-router-dom';
import { Auth0Provider, withAuthenticationRequired  } from '@auth0/auth0-react';


const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState) => {
    console.log(appState)
    navigate((appState && appState.returnTo) || window.location.pathname);
  };
  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
     <Auth0ProviderWithRedirectCallback
        domain="dev-zzy56vuxu2shyzyw.us.auth0.com"
        clientId="OERMvyTmTvII5e8vtGhgmLtDk5BMN2kI"
        authorizationParams={{
          redirect_uri: "http://localhost:3000"
        }}
    >
      <Routes>
        <Route path='/*' element={<App/>} />
      </Routes>

    </Auth0ProviderWithRedirectCallback>
    </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
