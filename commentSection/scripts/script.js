// This prevents the following error:
// Cannot redeclare block-scoped variable _____
/* DATA */
// Another thing we can think about is storing information to local storage
// for better usability down the road.
var comments = [];
/* CUSTOM FUNCTIONS */
var addComment = function () {
    return;
};
var likeComment = function () {
    return;
};
/* DOM VARIABLES */
var commentSectionEl = document.querySelector(".COMMENT_SECTION");
var createCommentEl = document.querySelector(".ADD_COMMENT");
/* DOM METHODS */
commentSectionEl.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Testing");
});
createCommentEl.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("Create Commemt");
});
/* SCRIPT EXECUTION */
console.log(Date.now());
