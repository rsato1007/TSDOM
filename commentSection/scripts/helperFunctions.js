"use strict";
exports.__esModule = true;
exports.createCommentHeader = void 0;
var createCommentHeader = function (comment) {
    var commentHeader = document.createElement('div');
    commentHeader.classList.add('COMMENT_HEADER');
    // Create and append our three elements
    var classes = ["ProfileCircle", "Name", 'TimePosted'];
    classes.forEach(function (item) {
        var el = document.createElement('div');
        el.classList.add(item);
        commentHeader.appendChild(el);
    });
    console.log(commentHeader);
    return commentHeader;
};
exports.createCommentHeader = createCommentHeader;
