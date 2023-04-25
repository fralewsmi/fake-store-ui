import Product from "./components/product/Product";

const App = () => (
  <div className="bg-slate-200 h-screen flex flex-col">
    <header className="bg-slate-800">
      <h1 className="text-white text-4xl text-center font-bold py-4">
        Fake Store
      </h1>
    </header>
    <main className="container mx-auto bg-white grow overflow-y-scroll">
      <h2 className="text-2xl text-center font-bold py-4">Products</h2>
      <section className="flex flex-col items-center gap-4 py-8">
        <Product
          title="test"
          price="$100"
          description="description"
          image="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
        />
        <Product
          title="test"
          price="$100"
          description="description"
          image="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
        />
        <Product
          title="test"
          price="$100"
          description="description"
          image="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
        />
        <Product
          title="test"
          price="$100"
          description="description"
          image="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
        />
        <Product
          title="test"
          price="$100"
          description="description"
          image="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
        />
        <Product
          title="test"
          price="$100"
          description="description"
          image="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
        />
        <Product
          title="test"
          price="$100"
          description="description"
          image="https://images.unsplash.com/photo-1637734433731-621aca1c8cb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=404&q=80"
        />
      </section>
    </main>
  </div>
);

export default App;
