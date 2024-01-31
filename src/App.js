import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

function App() {

  const browserRouter = createBrowserRouter([
    {
      path:'/',
      element:<Nav />,
      children:[
        { path:'',element:<Hero/> },
        {
          path:'/courses',
          element:<Courses/>
        }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={browserRouter} />
      {/* <Nav />
      <Hero />
      <Courses /> */}
    </div>
  );
}

export default App;
