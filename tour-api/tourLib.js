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

const findById = (id) => {
  return tours.find((tour) => tour.id === Number(id)) || null;
};




module.exports = {
  addOne,
  getAll,
  findById,
};