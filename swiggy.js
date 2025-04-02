var restaurants = [
    {
        discount: "20% off",
        image: "https://img.freepik.com/premium-photo/wood-background-with-restaurant-view-copyspace-banner_1135385-33180.jpg",
        restaurantName: "The Spice Room",
        rating: 4.5,
        timePeriod: "25-30 mins",
        location: "Banjara Hills, Hyderabad"
    },
    {
        discount: "15% off",
        image: "https://img.freepik.com/premium-photo/wood-background-with-restaurant-view-copyspace-banner_1135385-33180.jpg",
        restaurantName: "Royal Feast",
        rating: 4.3,
        timePeriod: "28-32 mins",
        location: "Madhapur, Hyderabad"
    },
    {
        discount: "10% off",
        image: "https://img.freepik.com/premium-photo/wood-background-with-restaurant-view-copyspace-banner_1135385-33180.jpg",
        restaurantName: "Taste of Hyderabad",
        rating: 4.6,
        timePeriod: "27-30 mins",
        location: "Gachibowli, Hyderabad"
    },
    {
        discount: "25% off",
        image: "https://img.freepik.com/premium-photo/wood-background-with-restaurant-view-copyspace-banner_1135385-33180.jpg",
        restaurantName: "Biryani House",
        rating: 4.4,
        timePeriod: "25-29 mins",
        location: "Kukatpally, Hyderabad"
    },
    {
        discount: "18% off",
        image: "https://img.freepik.com/premium-photo/wood-background-with-restaurant-view-copyspace-banner_1135385-33180.jpg",
        restaurantName: "Southern Delights",
        rating: 4.2,
        timePeriod: "26-30 mins",
        location: "Jubilee Hills, Hyderabad"
    },
    {
        discount: "20% off",
        image: "https://img.freepik.com/premium-photo/wood-background-with-restaurant-view-copyspace-banner_1135385-33180.jpg",
        restaurantName: "Fusion Flavors",
        rating: 4.1,
        timePeriod: "25-30 mins",
        location: "Begumpet, Hyderabad"
    },
    {
        discount: "12% off",
        image: "https://img.freepik.com/premium-photo/wood-background-with-restaurant-view-copyspace-banner_1135385-33180.jpg",
        restaurantName: "Kebab Kingdom",
        rating: 4.3,
        timePeriod: "27-31 mins",
        location: "Ameerpet, Hyderabad"
    },
    {
        discount: "22% off",
        image: "https://img.freepik.com/premium-photo/wood-background-with-restaurant-view-copyspace-banner_1135385-33180.jpg",
        restaurantName: "The Curry Bowl",
        rating: 4.5,
        timePeriod: "28-30 mins",
        location: "Secunderabad, Hyderabad"
    },
    {
        discount: "17% off",
        image: "https://img.freepik.com/premium-photo/wood-background-with-restaurant-view-copyspace-banner_1135385-33180.jpg",
        restaurantName: "Tandoori Flames",
        rating: 4.0,
        timePeriod: "25-30 mins",
        location: "Kondapur, Hyderabad"
    },
    {
        discount: "30% off",
        image: "https://img.freepik.com/premium-photo/wood-background-with-restaurant-view-copyspace-banner_1135385-33180.jpg",
        restaurantName: "Grill Junction",
        rating: 4.4,
        timePeriod: "29-32 mins",
        location: "Miyapur, Hyderabad"
    },
    {
        discount: "10% off",
        image: "https://img.freepik.com/premium-photo/wood-background-with-restaurant-view-copyspace-banner_1135385-33180.jpg",
        restaurantName: "Veggie Paradise",
        rating: 4.1,
        timePeriod: "26-30 mins",
        location: "LB Nagar, Hyderabad"
    },
    {
        discount: "15% off",
        image: "https://img.freepik.com/premium-photo/wood-background-with-restaurant-view-copyspace-banner_1135385-33180.jpg",
        restaurantName: "Ocean's Catch",
        rating: 4.2,
        timePeriod: "25-29 mins",
        location: "Sainikpuri, Hyderabad"
    },
    {
        discount: "20% off",
        image: "https://img.freepik.com/premium-photo/wood-background-with-restaurant-view-copyspace-banner_1135385-33180.jpg",
        restaurantName: "Mediterranean Bliss",
        rating: 4.6,
        timePeriod: "28-30 mins",
        location: "Madhapur, Hyderabad"
    },
    {
        discount: "18% off",
        image: "https://img.freepik.com/premium-photo/wood-background-with-restaurant-view-copyspace-banner_1135385-33180.jpg",
        restaurantName: "Spice Route",
        rating: 4.3,
        timePeriod: "27-31 mins",
        location: "Hitech City, Hyderabad"
    },
    {
        discount: "25% off",
        image: "https://img.freepik.com/premium-photo/wood-background-with-restaurant-view-copyspace-banner_1135385-33180.jpg",
        restaurantName: "Fiesta Diner",
        rating: 4.0,
        timePeriod: "25-30 mins",
        location: "Tolichowki, Hyderabad"
    }
];

var restaurantdetails = '';
for (var i = 0; i < restaurants.length; i++) {
    restaurantdetails = restaurantdetails + `
    <div class="img-edit">
        <img src="${restaurants[i].image}"height="118px" width="180px"/>
        <diV class="parent"><h3 class="child">${restaurants[i].discount}</h3></diV>
        <h3 >${restaurants[i].restaurantName}</h3>
        <i id="icon" class="fa-solid fa-star"></i>
        <p class="p1">${restaurants[i].rating} • ${restaurants[i].timePeriod}</p>
        <p class="p2">${restaurants[i].location}</p>
   </div>`
}
document.getElementById('thirdpart').innerHTML=restaurantdetails;