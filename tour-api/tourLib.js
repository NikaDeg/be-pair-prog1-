const Tour = require("./tourLib");

const getAllTours = (req, res) => {
    const tours = Tour.getAll();
    res.json(tours);
};

const createTour = (req, res) => {
  const { name, info, image, price, location } = req.body;

  const tour = Tour.addOne(
    name,
    info,
    image,
    price,
    location
  );

  res.status(201).json(tour);
};

const getTourById = (req, res) => {
  const tour = Tour.findById(req.params.tourId);

  if (!tour) {
    return res.status(404).json({ message: "Tour not found" });
  }

  res.json(tour);
};

const update = (id, data) => {
  const tour = tours.find(
    (tour) => tour.id === Number(id)
  );

  if (!tour) {
    return null;
  }

  Object.assign(tour, data);

  return tour;
};

const deleteOne = (id) => {
  const index = tours.findIndex(
    (tour) => tour.id === Number(id)
  );

  if (index === -1) {
    return false;
  }

  tours.splice(index, 1);
  return true;
};

module.exports = {
  getAllTours,
  createTour,
  getTourById,
  updateTour,
  deleteTour,
};