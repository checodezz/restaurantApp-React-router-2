import { useParams } from "react-router-dom";
import Restaurants from "./Restaurants";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RestaurantDetails = () => {
  const restaurantId = useParams();
  console.log(restaurantId)

  const restaurants = [
    {
      id: 1,
      name: "Taste of India",
      cuisine: "Indian",
      location: "Unknown",
      rating: 4.7,
      description: "Enjoy authentic Indian cuisine at Taste of India...",
      menu: [
        { name: "Dish 1", price: 10 },
        { name: "Dish 2", price: 12 },
        { name: "Dish 3", price: 15 }, // Additional menu item
      ],
    },
    {
      id: 2,
      name: "Taste of Italy",
      cuisine: "Italian",
      location: "Unknown",
      rating: 4.5,
      description: "Experience the essence of Italy at Taste of Italy Hotel...",
      menu: [
        { name: "Pizza Margherita", price: 8 },
        { name: "Pasta Carbonara", price: 14 },
        { name: "Tiramisu", price: 6 }, // Additional menu item
      ],
    },
    {
      id: 3,
      name: "Pizza Kitchen",
      cuisine: "Italian",
      location: "Unknown",
      rating: 4.1,
      description: "Where Every Slice Feels Like Home!",
      menu: [
        { name: "Margherita Pizza", price: 10 },
        { name: "Pepperoni Pizza", price: 12 },
        { name: "Garlic Breadsticks", price: 5 }, // Additional menu item
      ],
    },
  ];

  const restaurantData = restaurants.find(
    (restaurant) => restaurant.id == restaurantId.restaurantId,
  );

  const Menu = ({ data }) => {
    return (
      <div className="row">
      {data.map((ele) => (
          <div key={ele.name} className="col-md-4">
            <div  className="card my-3">
              <div className="card-body">
                <div className="card-title">
                  <h3>{ele.name}</h3>
                </div>
                <p className="card-text">Price: ${ele.price}</p>
              </div>
            </div>
          </div>
      ))}
        </div>
    )
  }

  return (
    <>
      <Header />
      <main className="container">
        <h1 className="display-4 py-2">{restaurantData.name}</h1>
        <p className="fs-5">Cuisine: {restaurantData.cuisine}</p>
        <p className="fs-5">Location: {restaurantData.location}</p>
        <p className="fs-5">Rating: {restaurantData.rating}</p>
        <p className="fs-5">{restaurantData.description}</p>
        <hr />
        <h2>Menu</h2>
        <Menu data={restaurantData.menu} />;
      </main>
      <Footer />
    </>
  );
};

export default RestaurantDetails;
