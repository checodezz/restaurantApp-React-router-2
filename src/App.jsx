import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css" 
import Header from "./components/Header"
import Footer from "./components/Footer"
export default function App() {
  return (
    <>
    <Header/>
    <main className="container my-3">
      <h1 className="display-3 py-2">Featured Restaurants</h1>
      <section>
        <img
          src="https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Restaurant 1" className="img-fluid rounded my-1" 
        />
        <h2>Taste of Italy</h2>
        <p>Italian | Rating 4.5</p>
        <p>123 Main Street, Anytown, USA</p>
      </section>
<br/>
      <section>
        <img
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
          alt="Restaurant 2" className="img-fluid rounded my-1"
        />
        <h2>Spice Village</h2>
        <p>India | Rating 4.9</p>
        <p>456 Elm Street, Anytown, USA</p>
      </section>
    </main>
    <Footer/>
      </>
  );
}
