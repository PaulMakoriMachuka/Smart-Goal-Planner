function Home(props) {
  const { page } = props;

  if (page === "home") {
    return (
      <div>
        <h1>This is Home page</h1>
        
      </div>
    );
  }

  return null;
}

export default Home;

