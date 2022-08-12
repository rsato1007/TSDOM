
const {log} = console;
import {createCommentHeader} from "./helperFunctions";

/* TYPES & INTERFACES */
interface SingleComment {
    datePosted: number,
    displayName: string,
    username: string,
    profileImage: string,
    body: string,
    likes: number,
    parentCommentUser: string,
}

/* DATA */
// Another thing we can think about is storing information to local storage
// for better usability down the road.
const defaultImage: string = "https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg";
let comments: SingleComment[] =[
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
]

/* CUSTOM FUNCTIONS */
// Adds user's comment to the comment section
const addComment = (comment: SingleComment):void => {
    // Adjust the time to be more readable
    const betterTime:string = translateDate(comment.datePosted);
    // Create element that will be added to DOM
    let commentEl = document.createDocumentFragment();
    // Here we create the various components of our comment element
    let commentContainer = document.createElement('div');
    commentContainer.classList.add("SINGLE_COMMENT");
    // Let's create a helper function that creates each child element.
    createCommentHeader(comment);
        // BODY FUNCTION
        // OPTIONS FUNCTION
    // Add element to last child of comments element.

    return;
};

// updates the comment's like count
const likeComment = ():void => {
    return;
};

// alters JavaScript date into number that is user friendly.
const translateDate = (time: number):string => {
    const diff: number = Date.now() - time;
    // Days

    // Hours
    if (diff > 3600000) {
        const hours: number = Math.round(diff / 1000 / 60 / 60);
        log(`${hours} Hour(s) Ago`);
        return `${hours} Minute(s) Ago`;
    }
    // Minutes
    else if (diff > 60000) {
        const minutes: number = Math.round(diff / 1000 / 60);
        log(`${minutes} Minutes Ago`);
        return `${minutes} Minutes Ago`;
    }
    // Seconds
    else {
        const seconds: number = Math.round(diff / 1000);
        log(`${seconds} Seconds Ago`);
        return `${seconds} Seconds Ago`;
    }
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
comments.forEach((comment): void => {
    addComment(comment);
});