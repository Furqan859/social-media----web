
const search= document.querySelector("#searchInput");
async function dbSearch(){
  const searchApi = await fetch('https://dummyjson.com/posts/search?q=love')
  const newSearchData = await searchApi.json();
  // console.log(newSearchData.posts,"data api search")

  // search data
  search.addEventListener("input",(e)=>{
    console.log(e.target.value);
    const filteredUsers = newSearchData.posts.filter((u)=>u.title.toLowerCase().includes(e.target.value.toLowerCase()));
    // const filteredUsers = newSearchData.posts.filter((u)=>u.title.toLowerCase().includes(e.target.value.toLowerCase()));
      const myContent = document.getElementById("card");

     

 
      
      const showHtml = filteredUsers.map((filterData, index) => {
        return `<div>
                 <p id="update-body" role="button">${filterData.body}</p>
                 <h6>Reactions:<span class="badge bg-secondary">${filterData.reactions}</span></h6>
                 <div style="display:flex">${filterData.tags.map((tag) => {
                ` <div style="margin-right: 10px;margin-left: 10px;">
                  <span class="badge rounded-pill bg-dark">${tag}}</span> 
                  <button id="delete" ${index} class="badge rounded-pill bg-dark d-flex float-end">Delete</button>
                  </div>`
                 })}</div>
                </div>`
      
      })
      myContent.innerHTML = showHtml;
   
  });



}

dbSearch();