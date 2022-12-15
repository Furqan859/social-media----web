var globalUpdatePostId = null;
var globalUpdateDeleteId = null;
var globalUpdateCommentValue = null;
var globalUpdateCommentValue = null;
var globalDeleteValueData = null;


const dataPost = JSON.parse(localStorage.getItem('post'));
const newComment = JSON.parse(localStorage.getItem('comment'));
const Comments = JSON.parse(localStorage.getItem("userComments"));
console.log(Comments);
// const LocalPost = JSON.parse(localStorage.getItem('post'));

const myContent = document.getElementById("card");

async function userComments(index) {
  console.log(index);
  const getComments = await fetch(`https://dummyjson.com/comments/post/${index}`);
  const postComments = await getComments.json();
  await localStorage.setItem("userComments", JSON.stringify(postComments));
  const Comments = JSON.parse(localStorage.getItem("userComments"));
  // console.log(Comments.comments[0]);
  const myComments = document.getElementById("userComments");
  const showComments = await Comments.comments.map((comment, index) => {
    return `<div class="card" style="width: 25rem;">
    <div class="card-body">
      <h5 class="card-title">Comments</h5>
      <div class="input-group m-2">
      <div class="input-group-prepend">
        <span  class="input-group-text" id="">New Comments</span>
      </div>
      <input id="edit-field" type="text" class=" form-control">
    </div>
      <h6 class="card-subtitle mb-2 text-muted">UserName: ${comment?.user?.username}</h6>
      <p class="card-text">${comment.body}</p>
      <button onclick="EditComment(${index})" type="button" class="btn btn-dark">Edit</button>
      <button onclick="DeleteComment(${index})"  type="button" class="btn btn-dark">Delete</button>
      <button  onclick="NewCommentUpdate(${index})" type="button" class="btn btn-dark">Submit</button>
      
    </div>
    `
  })
  //
  myComments.innerHTML = showComments;
}
myContent.innerHTML = myContent;
const showHtml = dataPost.posts.map((post, index) => {

  return `
           <p onclick="PostUpdate(${index})" style="background-color:#f5f5f5; border-radius:20px; padding:30px" role="button"  >${post.body}</p>
          <div>
          <div class="d-flex justify-content-between"> 
          <h6>Reactions:<span class="badge bg-secondary">${post.reactions}</span></h6>
          <button  type="button" class="btn btn-dark" onclick='userComments(${post.id})'>
       Comments
   </button>
           <div style="display:flex">
           ${post.tags.map((tag) => {
    return `<div style="margin-right: 10px;margin-left: 10px;">
            <span class="badge rounded-pill bg-dark mb-3">${tag}</span></div>
            `
  })}</div>        
  </div>
  </div>
  `


})
myContent.innerHTML = showHtml;

//


 

  function NewCommentUpdate(index){
    let data = Comments.comments.find(obj => obj.postId === index + 1);
    globalUpdateCommentValue = data.id;
  async function newDataUpdated(){
    let NewData = document.getElementById("edit-field").value;
    const updatedCommentApi =  await fetch(`https://dummyjson.com/comments/${globalUpdateCommentValue}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        body: NewData,
        postId:Math.floor(Math.random() * 100),
        userId:Math.floor(Math.random()* 100)
      })
    })
    const reApiComment  = await updatedCommentApi.json()
    console.log(reApiComment,"update new value in api")
   } 
   
 
 newDataUpdated()
}

async function EditComment(index) {
  const NewData = document.getElementById("edit-field");
  console.log(index + 1, "index")
  const data = Comments.comments.find(obj => obj.postId === index + 1);
  console.log(data.id, "dataPost id");
  NewData.value = data.body
  globalUpdateCommentValue = data.id;
  const updatedCommentApi =  await fetch(`https://dummyjson.com/comments/${globalUpdateCommentValue}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      body: NewData
    })
    
  })
  console.log(updatedCommentApi,"edit function updated");
  

}
async function DeleteComment(index) {
  const NewData = document.getElementById("edit-field");
  const data = Comments.comments.find(obj => obj.postId === index + 1);
  globalDeleteValueData = data.id;
  console.log(data.id, "dataPost id");
  NewData.value = "";
  globalUpdateCommentValue = data.id;
  const updatedCommentApi =  await fetch(`https://dummyjson.com/comments/${globalDeleteValueData}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      body: delete data
    })
   
    
  })
  console.log(updatedCommentApi,"delte api hit");

}


const PostUpdate = (index) => {
  const NewData = document.getElementById("input-post");
  const data = dataPost.posts.find(obj => obj.id === index + 1);
  console.log(data.id, "dataPost id");
  NewData.value = data.body
  console.log(data.id, "newData");
  globalUpdatePostId = data.id;
  console.log(globalUpdatePostId, "globalId");
}

const PostUpdateCommentData = (index) => {
  const NewData = document.getElementById("addANote");
  const [data] = newComment.comments.posts;
  console.log([data].push(NewData), "return data")
  [data].push(NewData);

}

//
const UpdateEditData = () => {
  console.log(globalUpdatePostId, "in-function")
  const searchBox = document.getElementById('input-post').value;
  async function updatePost() {
    try {
      const updatePost = await fetch(`https://dummyjson.com/posts/${globalUpdatePostId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          body: searchBox
        })
      })

      const uPost = await updatePost.json();
    }
    catch (e) {
      console.log(e.message);
    }
  }
  updatePost();
}

const btn = document.getElementById('post-button');
const textarea = document.getElementById('input-post');
btn.addEventListener('click', function handleClick() {
  console.log(textarea.value, "value");
  textarea.value = '';
});



// update a posts
const updatePost = (index) => {
  const NewData = document.getElementById("input-post");
  const data = dataPost.posts.find(obj => obj.id === index + 1);
  NewData.value = data.body
  console.log(data.id, "newData");
  globalUpdatePostId = data.id;
  console.log(globalUpdatePostId, "globalId")
}


const UpdatePost = () => {
  console.log(globalUpdatePostId, "in-function")

  const searchBox = document.getElementById('input-post').value;
  console.log(searchBox, "search-box")
  async function updatePost() {

    try {
      const updatePost = await fetch(`https://dummyjson.com/posts/${globalUpdatePostId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          body: searchBox

        })
      })
      searchBox.value = '';

      const uPost = await updatePost.json();
      // console.log(uPost,"update post");
      // localStorage.setItem('updatePost', JSON.stringify(uPost));
      console.log(uPost, "update post");

    }


    catch (e) {
      console.log(e.message);
    }



  }

  updatePost();



}







