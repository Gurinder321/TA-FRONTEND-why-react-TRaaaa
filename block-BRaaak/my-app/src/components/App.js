function App(props) {
  return (
    <>
      <Header />
      <Hero />
      <Articles />
    </>
  );
}

function Header() {
  return (
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  );
}

function Hero() {
  return <img src="/images/birdy.png" />;
}

function Articles(props) {
  return (
    <div>
      <img src="https://images.unsplash.com/photo-1648737963080-109bbf325c90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60" />
      <h3>{props.title}</h3>
    </div>
  );
}

export default App;
