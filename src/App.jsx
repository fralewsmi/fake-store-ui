import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Filter from "./containers/filter/Filter";
import Add from "./containers/add/Add";
import Edit from "./containers/edit/Edit";
import Products from "./containers/products/Products";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "add",
      element: <Add />,
    },
    {
      path: "edit/:id",
      element: <Edit />,
    },
    {
      path: "/",
      element: (
        <>
          <h2 className="text-2xl text-center font-bold py-4">Products</h2>
          <div className="flex gap-8 px-8">
            <Filter />
            <Products />
          </div>
        </>
      ),
    },
  ]);

  return (
    <div className="bg-slate-200 h-screen flex flex-col">
      <header className="bg-slate-800">
        <h1 className="text-white text-4xl text-center font-bold py-4">
          Fake Store
        </h1>
      </header>
      <main className="container mx-auto bg-white grow overflow-y-scroll">
        <RouterProvider router={router} />{" "}
      </main>
    </div>
  );
};

export default App;
