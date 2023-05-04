// function App() {
//   return <h1>hello world</h1>;
// }
const Header = () => {
  return (
    <header>
      <h1>Newton School</h1>
    </header>
  );
};
//<Header />
const App = () => {
  return (
    <div>
      <Header />
      <br />
      <main>
        <aside>sham tak</aside>
        <Button />
        <article>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut quam
          recusandae culpa cum et quaerat ad vitae a vel quidem animi harum ex
          debitis non tempore natus, doloribus maiores repellendus sapiente ab
          ducimus eligendi consequatur molestiae. Omnis inventore tempora
          molestias! Nemo odit quaerat placeat.
        </article>
      </main>
      <footer>gmail</footer>
      <br />
    </div>
  );
};
// const Button = () => {
//   return <button>Please click me</button>;
// };

function Button() {
  return <button>Please click me</button>;
}
// <Button />;
export default App;
