async function getPost(){

      alert("Click para continuar...");
      //llamar datos de una api publica
      try{
        await $(function(){
        $.ajax({
          url: "https://jsonplaceholder.typicode.com/posts",
          type: "GET",
          dataType: "json",
          success: function(posts){
            console.log(posts);
            
           //iteramos                 
           posts.forEach((post) => {
              let li = $("<li>").text(post.title); //solo 1 dato cn jquery
              //let li = document.createElement("li");
             //$(li).html("<p><strong>"+post.title+"</strong><br>"+post.body+"</p>");
             
              //li.append(titulo, contenido);
             // $("<li>").text(post.title);
                //li += $("<p>").text(post.body);
             $("#posts").append(li);
            });
            // for(const index in posts){
            //   let li = $("<li>").text(posts[index].title);
            //   li =+ $("<li>").text(posts[index].body)
            //   $("#posts").append(li);
            // }
          },
        });
        });

      }
      catch{

        alert("error al conectar a la Api");
      }
}