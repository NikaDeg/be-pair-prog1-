const Feeedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
    const feedbacks = Feeedback.getAll();
    res.json(feedbacks);
};

const createFeedback = (req, res) => {
    const { sender, message, rating, platform } = req.body;
    const newFeedback = Feeedback.addOne (sender, message, rating, platform);
    if (newFeedback) {
    res.status(201).json(newFeedback);
  } else {
    res.status(500).json({ message: "Failed to create feedback" });
  }
};

const getFeedbackById = (req, res) => {
    const { feedbackId } = req.params;
    res.status(200).json({ message: `Get feedback with ID: ${feedbackId}` });
}
const updateFeedback = (req, res) => {
    const { feedbackId } = req.params;
    res.status(200).json({ message: `Update feedback with ID: ${feedbackId}` });
}
const deleteFeedback = (req, res) => {
    const { feedbackId } = req.params;
    res.status(200).json({ message: `Delete feedback with ID: ${feedbackId}` });
}

module.exports = { getAllFeedbacks,
createFeedback,
getFeedbackById,
updateFeedback,
deleteFeedback, 
};