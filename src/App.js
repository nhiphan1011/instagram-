import { Fragment } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import { publicRoutes } from './routes/routes';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout
            const Page = route.component
            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) { Layout = Fragment }

            return (
              <Route
                key={index} 
                path={route.path}
                element={<Layout>{Page}</Layout>}/>)
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
