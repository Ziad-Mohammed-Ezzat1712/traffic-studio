import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Portfolio from './Components/Protfolio/Protfolio';
import OurServices from './Components/OurServices/OurServices';
import About from './Components/About/About';
import ClientTestimonials from './Components/ClientTestimonials/ClientTestimonials';
import ConectUs from './Components/ConectUs/ConectUs';
import AllProjects from './Components/AllProjects/AllProjects';
import DashboardLayout from './Components/DashboardLayout/DashboardLayout';
import ProductsDashboard from './Components/ProductsDashboard/ProductsDashboard';
import NotFound from './Components/NotFound/NotFound';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ViewBooking from './Components/ViewBooking/ViewBooking';
import ListPrices from './Components/listPrices/listPrices';

let x = createBrowserRouter([
  { index: true, element: <Home /> },
  { path: "conectus", element: <ConectUs /> },
  { path: "allproject", element: <AllProjects /> },
  { path: "*", element: <NotFound /> },
  { path: "/project/:id", element: <ProjectDetails /> },
  { path: "/listprices", element: <ListPrices /> },
  { path: "/admin/login", element: <AdminLogin /> },
    

  {
    path: '/admin/dashboard',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: 'products', element: <ProductsDashboard /> },
      { path: 'booking', element: <ViewBooking /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={x} />;
}

export default App;
