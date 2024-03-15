import Header from "../components/Header";
import Footer from "../components/Footer";
import {Link} from "react-router-dom"


export default function Restaurants() {
  return (
    <>
      <Header />
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
                  Enjoy authentic Indian cuisine at Taste of India. Explore a
                  variety of delecious dishes from different regions of India
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Rating: 4.7 | Open Now
                  </small>
                </p>
                <Link to="/restaurants/1" className="btn btn-primary">View More</Link>
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
                  Experience the essence of Italy at Taste of Italy Hotel, where
                  every stay is infused with the flavors and charm of the
                  Mediterranean.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Rating: 4.5 | Open Now
                  </small>
                </p>
                <Link to="/restaurants/2" className="btn btn-primary">View More</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_1280.jpg"
                className="img-fluid rounded-start"
                alt="..."
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Pizza Kitchen</h5>
                <p className="card-text">
                  Where Every Slice Feels Like Home!
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Rating: 4.1 | Open Now
                  </small>
                </p>
                <Link to='/restaurants/3' className="btn btn-primary">View More</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    <Footer />
    </>
  );
}
