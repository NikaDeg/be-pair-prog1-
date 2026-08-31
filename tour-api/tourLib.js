let TourArray = [];
let nextId = 1;

function addOne(name, info, image, price, location) {
    if (!name || !info || !image || !price || !location) {
        return false;
    }

const newTour = {
    id: nextId++,
    name,
    info,
    image,
    price,
    location,
};

TourArray.push(newTour);
return newTour;
};

function getAll() {
    return TourArray;
}


if (require.main === module) {
   addOne(
    "7 Days Tour",
    "Join us for the Best of Helsinki!",
    "https://www.course-api.com/images/tours/tour-x.jpeg",
    "1,495",
    "Helsinki, Finland"
  );

  addOne(
  "Helsinki Weekend",
  "Discover Helsinki.",
  "https://example.com/helsinki.jpg",
  "795",
  "Helsinki, Finland"
);

  console.log(getAll());
}