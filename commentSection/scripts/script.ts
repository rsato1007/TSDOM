// This prevents the following error:
// Cannot redeclare block-scoped variable _____

/* TYPES & INTERFACES */
interface Comment {
    datePosted: number,
    displayName: string,
    username: string,
    profileImage: string,
    body: string,
    likes: number,
    commentUser: string,
}

type CommentList = Comment[]

/* DATA */
// Another thing we can think about is storing information to local storage
// for better usability down the road.
let comments:CommentList[] = [];
let time:number = Date.now();

/* CUSTOM FUNCTIONS */
// Adds user's comment to the comment section
const addComment = ():void => {
    return;
};

// updates the comment's like count
const likeComment = ():void => {
    return;
};

// alters JavaScript date into number that is user friendly.
const translateDate = (time: number):number => {
    return 1;
} 

/* DOM VARIABLES */
let commentSectionEl = document.querySelector(".COMMENT_SECTION")! as HTMLDivElement;
let createCommentEl = document.querySelector(".ADD_COMMENT")! as HTMLDivElement;

/* DOM METHODS */
// We utilize only two eventlisteners to optimize performance
// a little bit.
commentSectionEl.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Testing");
});

createCommentEl.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Create Comment");
});

/* SCRIPT EXECUTION */
console.log(time);