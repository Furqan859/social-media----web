// comment api it
var globalUpdateDeleteId = null;
    async function commentApi() {
        try {
          const getComment = await fetch("https://dummyjson.com/comments", {
            
          })
          const uPost = await getComment.json();
          localStorage.setItem('comment', JSON.stringify(uPost));
        //   console.log(uPost.comments,"comment");
        //   const myContent = document.getElementById("comment-card");

         
        //   console.log(newComment.comments[0].body,"new comment")
        //    myContent.innerHTML = myContent;
        //    const showHtml = newComment.comments.map((post, index) => {
        //     console.log(post.body,"post data")
        //      return `<div>${post.body}</div>`


myContent.innerHTML = showHtml;
          
        }
        catch (e) {
          console.log(e.message);
        }
       
        
      
      }
      
      commentApi();

    //   const localComment = JSON.parse(localStorage.getItem('comment'));
    // //   console.log(localComment,"local_storage");


    //   const PostUpdateComment = (index) => {
    //     console.log(index,"index")
    //     const NewData = document.getElementById("comment-update");
    //   const localComment = JSON.parse(localStorage.getItem('comment'));
    //      const data =   localComment.comments.find(obj => obj.id === index+1);
    //      console.log(data,"data comment");
    //      NewData.value = data.body
    //     // console.log(data.id,"newData");
    //     // globalUpdateDeleteId = data.id;
       
    //   }
  
      
    
  


  