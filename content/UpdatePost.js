var globalUpdatePostId = null;
var globalUpdateDeleteId = null;

  const dataPost = JSON.parse(localStorage.getItem('post'));
  const newComment = JSON.parse(localStorage.getItem('comment'));
const myContent = document.getElementById("card");
const newArray = [];
// const commentsValue = newComment.comments;
// console.log(commentsValue,"commentsValue")
// const arraySpread = [newArray,...commentsValue];
// newArray.push(newComment.comments);
// console.log(arraySpread,"new array data show")


const showHtml = dataPost.posts.map((post, index) => {

  return `<div>
           <p onclick="PostUpdate(${index})" style="background-color:#f5f5f5; border-radius:20px; padding:30px" role="button"  >${post.body}</p>
          <div>
          <div class="d-flex justify-content-between"> 
          <h6>Reactions:<span class="badge bg-secondary">${post.reactions}</span></h6>
          <button  type="button" class="btn btn-dark" onclick='openModal(${index})'>
       Comments
   </button>
           <div style="display:flex">
           ${post.tags.map((tag) => {
    return `<div style="margin-right: 10px;margin-left: 10px;">
            <span class="badge rounded-pill bg-dark mb-3">${tag}</span></div>
            ` })}
            </div>        
             </div>
            </div>`
})
myContent.innerHTML = showHtml;

// console.log(newComment,"new Comment")

function NewCommentData(index){ 
  let NewData = document.getElementById("addANote");
  console.log(NewData.value,"input value");
   let data =   newComment.comments.find(obj => obj.id === index+1);
   console.log(data.id,"dataPost id");
   
   newArray.push(NewData.body =NewData.value);
  console.log(newArray,"body")
  newComment.comments.push(newArray);
   
  }

function EditComment(index){
  const NewData = document.getElementById("addANote");
   const data =   newComment.comments.find(obj => obj.id === index+1);
  //  console.log(data.id,"dataPost id");
  const newData = NewData.value = data.body;
  console.log(newData,"new data");
  //  const newArray.splice()
}
function DeleteComment(index){
  const NewData = document.getElementById("addANote");
   const data =   newComment.comments.find(obj => obj.id === index+1);
  //  console.log(data.id,"dataPost id")
  data.splice(index, 1);
   NewData.value = data.body;

  
}



async function openModal(index) { document.getElementById("backdrop").style.display = "block";
  document.getElementById("exampleModal").style.display = "block";
  document.getElementById("exampleModal").classList.add("show");
  const commentsUpdateData =await fetch(`https://dummyjson.com/comments/${index+1}`);
  const commentsUpdateDataJson =await commentsUpdateData.json();
  localStorage.setItem('updatedCommentsJson', JSON.stringify(commentsUpdateDataJson));
  

}



  
  // const inputComment = document.getElementById("addANote").value;
  // console.log(inputComment,"input value");
  // const NewData = document.getElementById("addANote");
  //  const data =   newComment.comments.find(obj => obj.id === index+1);
  //  console.log(data.id,"dataPost id");
  //  const returnValue = NewData.value = data.body;
  //  console.log(returnValue,"return value")
  
  






// async function PostUpdate  (index) {

// }
// const PostUpdateCommentData = (index)=>{
//   const NewData = document.getElementById("addANote");
//    const [data] =   newComment.comments.posts;
//    console.log([data].push(NewData),"return data")
//    [data].push(NewData);
  
// }




// edit post
// const UpdateEditData = () =>{
//   console.log(globalUpdatePostId,"in-function")
  
//   const searchBox = document. getElementById('input-post').value;
  
//   // console.log(searchBox,"search-box")
//   async function updatePost() {
    
//       try {
//         const updatePost = await fetch(`https://dummyjson.com/posts/${globalUpdatePostId}`, {
//           method: 'PUT',
//           headers: { 'Content-Type': 'application/json' },
//           body : JSON.stringify({
//             body:searchBox
            
//           })
//         })
    
//         const uPost = await updatePost.json();
//     // console.log(uPost,"update post");
//         // localStorage.setItem('updatePost', JSON.stringify(uPost));
//         // console.log(uPost,"update post");
        
//       }
     
    
//       catch (e) {
//         console.log(e.message);
//       }
     
      
    
//     }
    
//     updatePost();

    
  
// }


const btn = document.getElementById('post-button');
const textarea = document. getElementById('input-post');

btn.addEventListener('click', function handleClick() {
  // 👇️ log value before clearing it
  console.log(textarea.value,"value");

  // 👇️ clear textarea value
  textarea.value = '';
});







// update a posts
// const updatePost = (index) => {
//   const NewData = document.getElementById("input-post");
//    const data =   dataPost.posts.find(obj => obj.id === index+1);
//    NewData.value = data.body
//   console.log(data.id,"newData");
//   globalUpdatePostId = data.id;
//   console.log(globalUpdatePostId,"globalId")
// }


const UpdatePost = () =>{
  console.log(globalUpdatePostId,"in-function")
  
  const searchBox = document. getElementById('input-post').value;
  console.log(searchBox,"search-box")
  async function updatePost() {
    
      try {
        const updatePost = await fetch(`https://dummyjson.com/posts/${globalUpdatePostId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body : JSON.stringify({
            body:searchBox
            
          })
        })
        searchBox.value='';
    
        const uPost = await updatePost.json();
    // console.log(uPost,"update post");
        // localStorage.setItem('updatePost', JSON.stringify(uPost));
        console.log(uPost,"update post");
        
      }
     
    
      catch (e) {
        console.log(e.message);
      }
     
      
    
    }
    
    updatePost();

    
  
}







