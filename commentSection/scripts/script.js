"use strict";
exports.__esModule = true;
var log = console.log;
var helperFunctions_1 = require("./helperFunctions");
/* DATA */
// Another thing we can think about is storing information to local storage
// for better usability down the road.
var defaultImage = "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg";
var comments = [
    {
        datePosted: 1660267734487,
        displayName: "LuckyHuskyMoney",
        username: "LuckyHuskyMoney",
        profileImage: defaultImage,
        body: "Dope",
        likes: 0,
        parentCommentUser: "Mega Jen"
    },
    {
        datePosted: 1660267744487,
        displayName: "TheBorderCollie",
        username: "TheBorderCollie",
        profileImage: defaultImage,
        body: "I really enjoyed this content, thanks!",
        likes: 0,
        parentCommentUser: "Mega Jen"
    }
];
/* CUSTOM FUNCTIONS */
// Adds user's comment to the comment section
var addComment = function (comment) {
    // Adjust the time to be more readable
    var betterTime = translateDate(comment.datePosted);
    // Create element that will be added to DOM
    var commentEl = document.createDocumentFragment();
    // Here we create the various components of our comment element
    var commentContainer = document.createElement('div');
    commentContainer.classList.add("SINGLE_COMMENT");
    // Let's create a helper function that creates each child element.
    (0, helperFunctions_1.createCommentHeader)(comment);
    // BODY FUNCTION
    // OPTIONS FUNCTION
    // Add element to last child of comments element.
    return;
};
// updates the comment's like count
var likeComment = function () {
    return;
};
// alters JavaScript date into number that is user friendly.
var translateDate = function (time) {
    var diff = Date.now() - time;
    // Days
    // Hours
    if (diff > 3600000) {
        var hours = Math.round(diff / 1000 / 60 / 60);
        log("".concat(hours, " Hour(s) Ago"));
        return "".concat(hours, " Minute(s) Ago");
    }
    // Minutes
    else if (diff > 60000) {
        var minutes = Math.round(diff / 1000 / 60);
        log("".concat(minutes, " Minutes Ago"));
        return "".concat(minutes, " Minutes Ago");
    }
    // Seconds
    else {
        var seconds = Math.round(diff / 1000);
        log("".concat(seconds, " Seconds Ago"));
        return "".concat(seconds, " Seconds Ago");
    }
};
/* DOM VARIABLES */
var commentSectionEl = document.querySelector(".COMMENT_SECTION");
var createCommentEl = document.querySelector(".ADD_COMMENT");
/* DOM METHODS */
// We utilize only two eventlisteners to optimize performance
// a little bit.
commentSectionEl.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Testing");
});
createCommentEl.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Create Comment");
});
/* SCRIPT EXECUTION */
comments.forEach(function (comment) {
    addComment(comment);
});
