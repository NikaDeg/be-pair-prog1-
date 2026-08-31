let FeedbackArray = [];
let nextId = 1;

// Create
function addOne(sender, message, rating, platform) {
    if (!sender || !message || !rating || !platform) {
        return False;
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

//Get all
function getAll() {
    return FeedbackArray;
}

//Read one
function findbyId(id) {
    const numbericId = Number(id);
    const feedback = FeedbackArray.find(item => item.id === numbericId);
    return feedback || false;
}



if (require.main === module) {
    console.log("Running feedbackLib.js directly");
  const result = addOne(
    "John Smith",
    "Great session on React components!",
    5,
    "mobile"
  );

  
    console.log(result);
    addOne("John Smith", "Great session!", 5, "mobile");
addOne("Anna Brown", "Very useful examples.", 4, "desktop");

console.log("getAll called:", getAll());

}

module.exports = {
  addOne,
  getAll,
  findbyId,
};




