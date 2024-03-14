import Header from "../components/Header"

export default function Restaurants() {
  return (
    <>
      <Header/>
    <main className="container">
      <h1 className="display-2 my-2">Restaurants</h1>
           <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
              className="img-fluid rounded-start"
              alt="..."
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Taste of India</h5>
              <p className="card-text">
               Enjoy authentic Indian cuisine at Taste of India. Explore a variety of delecious dishes from different regions of India
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                 Rating: 4.7 | Open Now
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
           

            <img
              src="https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img-fluid rounded-start"
              alt="..."
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Taste of Italy</h5>
              <p className="card-text">
                Experience the essence of Italy at Taste of Italy Hotel, where every stay is infused with the flavors and charm of the Mediterranean.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                 Rating: 4.5 | Open Now
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
      </>
  );
}
