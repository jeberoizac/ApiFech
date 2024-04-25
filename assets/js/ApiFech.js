//traer datos de api por post -->https://jsonplaceholder.typicode.com/posts

const getPost = async()=>{
  
  alert("Click para continuar...");
  try{
  let url = await fetch('https://jsonplaceholder.typicode.com/posts');
  let data = await url.json();
 //console.log(data);
   data.forEach(post => {
    let li = document.createElement("li");
    $(li).html("<p><strong>"+post.title+"</strong><br>"+post.body+"</p>");
   
    let li2 = `<li><p><strong>${post.title}</strong><br>${post.body}</p></li>`
    $("#posts").append(li2);
  });
   
  
 }
 catch(error){

  console.log(error);
 }

} 


