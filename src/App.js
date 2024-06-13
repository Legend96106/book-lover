import { useSelector } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import Home from "./views";
import Header from "./components/header";
import Footer from "./components/footer";

const publicRouter = createBrowserRouter(createRoutesFromElements(
  [
    <Route path='/' element={<Home />} />,
  ]
));

const privateRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Home />}>
            <Route path='start'>
                
            </Route>
      </Route>
    ),
);

function App() {
    const logged = useSelector((state) => state.app.data);
    
    return (
      <>
        <Header />
        <RouterProvider router={logged ? privateRouter : publicRouter} />
        <Footer />
      </>
    );
};

export default App;