
const createCommentHeader = (comment:any): HTMLDivElement => {
    let commentHeader = document.createElement('div');
    commentHeader.classList.add('COMMENT_HEADER');

    // Create and append our three elements
    const classes: string[] = ["ProfileCircle", "Name", 'TimePosted'];
    classes.forEach((item) => {
        let el = document.createElement('div');
        el.classList.add(item);
        commentHeader.appendChild(el);
    });
    console.log(commentHeader);
    return commentHeader;
};

// const createCommentBody = ():HTMLElement => {

// };

// const createCommentOptions = ():HTMLElement => {

// };

export {createCommentHeader};