let TourArray = [];
let nextId = 1;

function addOne(sender, message, rating, platform) {
    if (!sender || !message || rating < 1 || rating > 5 || !platform) {
        return false;
    }

const newFeedback = {
    id: nextId++,
    sender,
    message,
    rating,
    platform,
};

FeedbackArray.push(newFeedback);
return newFeedback;
}