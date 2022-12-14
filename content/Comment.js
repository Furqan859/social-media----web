
// function closeModal() {
//   document.getElementById("backdrop").style.display = "none"
//   document.getElementById("exampleModal").style.display = "none"
//   document.getElementById("exampleModal").classList.remove("show")
// }
// // Get the modal
// var modal = document.getElementById('exampleModal');

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
// if (event.target == modal) {
//   closeModal()
// }
// }



// const newUpdateComments =  JSON.parse(localStorage.getItem('updatedCommentsJson'));
// myContentData.innerHTML = myContentData;
// // console.log(myContent);
// const showHtml = newUpdateComments.map((post, index) => {

//   return `

//   <div>${post.body}</div>
//   `
// })
// myContentData.innerHTML = showHtml;

//   <button  type="button" class="btn btn-dark" onclick='openModal(${index})'>
//         Comments
//     </button>
           
//        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-modal="true"
//     role="dialog">
//     <div class="modal-dialog" role="document">
//         <div class="modal-content">
//             <div class="modal-header">
//                 <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//                 <button type="button" class="close" aria-label="Close" onclick="closeModal()">
//                     <span aria-hidden="true">×</span>
//                 </button>
//             </div>
//             <div class="modal-body">
                
//  <div>
//  <div class="form-outline mb-3 mt-3">
//  <input id="addANote"  type="text"  class="form-control"
//     placeholder="Type comment..." />
//  <label onclick="NewCommentData(${index})"  type="button"  class="form-label button  btn btn-dark my-3" for="addANote">New Comment</label>
//  </div>
//  <div id="comment-card" class="card mb-4">
//  <div class="card-body">
//     <p>hey</p>
 
//     <div class="d-flex justify-content-between">
//         <div class="d-flex flex-row align-items-center">
//             <img id="nav-img" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
//                 alt="avatar" width="25" height="25" />
//             <p class="small mb-0 ms-2">hey2</p>
//         </div>
//         <div class="d-flex flex-row align-items-center">
//             <p class="small text-muted mb-0">Upvote?</p>
//             <i class="far fa-thumbs-up mx-2 fa-xs text-black"
//                 style="margin-top: -0.16rem;"></i>
//             <p class="small text-muted mb-0">3</p>
//         </div>
//         <div class="d-flex flex-row align-items-center">
//         <button onclick="EditComment(${index})"  type="button" class="btn btn-dark mx-2">Edit</button>
//         <button onclick="DeleteComment(${index})" type="button" class="btn btn-dark">Delete</button>
        
//     </div>
//     </div>
//  </div>
//  </div>
 
//  </div>
//             </div>
//             <div class="modal-footer">
//                 <button type="button" class="btn btn-secondary" onclick="closeModal()">Close</button>
 
//             </div>
//         </div>
//     </div>
//  </div>
//  <div class="modal-backdrop fade show" id="backdrop" style="display: none;"></div>
        
        
//     </div>
    
//     </div>      
//               </div>
//              </div>