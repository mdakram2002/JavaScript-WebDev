let a = prompt("hey what's your name?");
console.log(a);

let b = alert("hey what heppend?");
console.log(b);

let deletePote = confirm("Do you want to delete this post");
//   console.log(confirm);
if (deletePote) {
    //post is delete
    console.log("this post has been deleted successfully.");
} else {
    //post is note delete
    console.log("this post has been note deleted.");
}