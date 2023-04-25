import Products from "./containers/products/Products";

const App = () => (
  <div className="bg-slate-200 h-screen flex flex-col">
    <header className="bg-slate-800">
      <h1 className="text-white text-4xl text-center font-bold py-4">
        Fake Store
      </h1>
    </header>
    <main className="container mx-auto bg-white grow overflow-y-scroll">
      <h2 className="text-2xl text-center font-bold py-4">Products</h2>
      <Products />
    </main>
  </div>
);

export default App;
