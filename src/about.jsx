function About(props){
    const { page } = props;

    if (page !== "about") {
      return null;
    }
  
    return (
      <div>
        <h1>This is about us</h1>
      </div>
    );
    }

export default About;