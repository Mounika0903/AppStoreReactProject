

// import './Home.css';

function Home() {
  return (
    <>

      <div className="container my-5">
        <div className="row text-center">
          <div className="col">
            <h1>Your Trusted Source for Amazing Apps!</h1>
            <p>For over a decade, our app store has been a trusted and innovative destination, offering a safe space to discover and download apps. With nearly 2 million apps, we ensure the highest standards of privacy, security, and content quality. Our commitment to excellence means you can explore new possibilities with confidence and peace of mind.</p>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">Explore Applications</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="https://images.pexels.com/photos/3850262/pexels-photo-3850262.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="card-img-top" alt="Featured Car 1" />
              {/* <div className="card-body"> */}
                {/* <h5 className="card-title">Car Model 1</h5>
                <p className="card-text">A brief description of the featured car.</p> */}
              {/* </div> */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Featured Car 2" />
              {/* <div className="card-body"> */}
                {/* <h5 className="card-title">Car Model 2</h5>
                <p className="card-text">A brief description of the featured car.</p> */}
              {/* </div> */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://images.pexels.com/photos/5417845/pexels-photo-5417845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Featured Car 3" />
              {/* <div className="card-body"> */}
                {/* <h5 className="card-title">Car Model 3</h5>
                <p className="card-text">A brief description of the featured car.</p> */}
              {/* </div> */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://media.istockphoto.com/id/1200037155/photo/omni-channel-technology-of-online-retail-business.jpg?s=1024x1024&w=is&k=20&c=x_gtFdK3FigvmCLDce--tNifMoWcPcpFciwJA7-s0lc=" className="card-img-top" alt="Featured Car 3" />
              {/* <div className="card-body"> */}
                {/* <h5 className="card-title">Car Model 3</h5>
                <p className="card-text">A brief description of the featured car.</p> */}
              {/* </div> */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Featured Car 3" />
              {/* <div className="card-body"> */}
                {/* <h5 className="card-title">Car Model 3</h5>
                <p className="card-text">A brief description of the featured car.</p> */}
              {/* </div> */}
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://images.pexels.com/photos/15226552/pexels-photo-15226552/free-photo-of-close-up-of-man-holding-a-smartphone-with-opened-instagram-profile.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="Featured Car 3" />
              {/* <div className="card-body"> */}
                {/* <h5 className="card-title">Car Model 3</h5>
                <p className="card-text">A brief description of the featured car.</p> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <h4>Car Sales</h4>
            <p>We offer a wide range of new and pre-owned luxury vehicles.</p>
          </div>
          <div className="col-md-4 text-center">
            <h4>Maintenance & Repairs</h4>
            <p>Our skilled technicians provide top-notch maintenance and repair services.</p>
          </div>
          <div className="col-md-4 text-center">
            <h4>Customization</h4>
            <p>Customize your vehicle to reflect your unique style and preferences.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
