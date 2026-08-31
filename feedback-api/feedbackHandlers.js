const Feeedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
    const feedbacks = Feeedback.getAll();
    res.json(feedbacks);
};

const createFeedback = (req, res) => {
    res.status(201).json({ message: "Create a new feedback" });
}

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