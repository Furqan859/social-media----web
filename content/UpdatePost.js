var globalUpdatePostId = null;
var globalUpdateDeleteId = null;
// console.log(globalUpdatePostId,"top-value")
// update post

// const body = document.getElementById("body");
// const title = document.getElementById("title");
// const updatePostData = JSON.parse(localStorage.getItem('updatePost'))
// console.log(updatePostData,"new id")


  const dataPost = JSON.parse(localStorage.getItem('post'));
  const newComment = JSON.parse(localStorage.getItem('comment'));
// const LocalPost = JSON.parse(localStorage.getItem('post'));
// console.log(LocalPost,"local data")
const myContent = document.getElementById("card");


myContent.innerHTML = myContent;

const showHtml = dataPost.posts.map((post, index) => {


  // console.log(post.id, "post localStorage")
  return `<div>
           <p onclick="PostUpdate(${index})" style="background-color:#f5f5f5; border-radius:20px; padding:30px" role="button"  >${post.body}</p>
           <h6>Reactions:<span class="badge bg-secondary">${post.reactions}</span></h6>
           <div style="display:flex">
           ${post.tags.map((tag) => {
    return `<div style="margin-right: 10px;margin-left: 10px;">
            <span class="badge rounded-pill bg-dark">${tag}</span></div>`
  })}</div>

       ${newComment.comments.map((cmt,index)=>{
        return `<div>
        <div class="form-outline mb-3 mt-3">
        <input type="text" id="addANote" class="form-control"
            placeholder="Type comment..." />
        <label onclick="PostUpdateCommentData(${index})" type="button"  class="form-label button  btn btn-dark my-2" for="addANote">New Comment</label>
    </div>
    <div id="comment-card" class="card mb-4">
        <div class="card-body">
            <p>${cmt.body}</p>

            <div class="d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                    <img id="nav-img" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                        alt="avatar" width="25" height="25" />
                    <p class="small mb-0 ms-2">${cmt.user.username}</p>
                </div>
                <div class="d-flex flex-row align-items-center">
                    <p class="small text-muted mb-0">Upvote?</p>
                    <i class="far fa-thumbs-up mx-2 fa-xs text-black"
                        style="margin-top: -0.16rem;"></i>
                    <p class="small text-muted mb-0">3</p>
                </div>
                <div class="d-flex flex-row align-items-center">
                <button type="button" class="btn btn-dark mx-2">Edit</button>
                <button type="button" class="btn btn-dark">Delete</button>
                
            </div>
            </div>
        </div>
    </div>`
       })}
  
              
  </div>
  
        </div>
  

  
  
  
  `
  

})
myContent.innerHTML = showHtml;

const PostUpdateCommentData = (index)=>{
  const NewData = document.getElementById("addANote");
   const data =   newComment.comments.posts.find(obj => obj.id === index+1);
   NewData.value = data.body
  console.log(data.id,"newData");
  globalUpdatePostId = data.id;
  console.log(globalUpdatePostId,"globalId")
}

const PostUpdate = (index) => {
  const NewData = document.getElementById("input-post");
   const data =   dataPost.posts.find(obj => obj.id === index+1);
   NewData.value = data.body
  console.log(data.id,"newData");
  globalUpdatePostId = data.id;
  console.log(globalUpdatePostId,"globalId")
}


// delete post



function deleteData(index) {
  
  // const NewData = document.getElementById("delete");
  // console.log(deleteData,"input delete")
console.log(index,"deleteData");
// const data =   dataPost.posts.find(obj => obj.id === index+1);
// data.addEventListener('click', function handler(event){
//   event.target.remove();
// })
// globalUpdateDeleteId = data.id;
// data.remove(obj);

// // const newId = data.find(obj => obj.id === index);
// console.log(data,"delete new data id")

// NewData.value = data.body


// console.log(data === index,"data delete button")
// console.log(globalUpdateDeleteId,"global delete id")

}


// async function DeleteNewData() {
//    const DeleteNewData = dataPost.posts.id;
//    console.log(DeleteNewData,"new delete data")
    
//   }
//   DeleteNewData();

  




// edit post
const UpdateEditData = () =>{
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


const btn = document.getElementById('post-button');
const textarea = document. getElementById('input-post');

btn.addEventListener('click', function handleClick() {
  // 👇️ log value before clearing it
  console.log(textarea.value,"value");

  // 👇️ clear textarea value
  textarea.value = '';
});







// update a posts
const updatePost = (index) => {
  const NewData = document.getElementById("input-post");
   const data =   dataPost.posts.find(obj => obj.id === index+1);
   NewData.value = data.body
  console.log(data.id,"newData");
  globalUpdatePostId = data.id;
  console.log(globalUpdatePostId,"globalId")
}


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







