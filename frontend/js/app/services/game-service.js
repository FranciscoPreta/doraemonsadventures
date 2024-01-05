define(function() {
    var externals = {}; // external api


    // externals.getGame = function(input, cb) {
    //     console.log(input);

        
        
    //     fetch(api+input)
    //         .then((res) => res.json())
    //         .then(cb); // same as .then((data) => cb(data));
    // }


    externals.createUser = async function postJSON(input) {
        // try {
            
            let data = {
              "name": input,
              "planet": "nobita",
              "hp": 4,
              "item":"item",
              "dorayaki":0
            };
          const response = await fetch("http://localhost:8080/doraemonAPI/api/create/", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

       
          const result = await response.json();
          console.log(result);
          console.log("Success:", result);
        // } catch (error) {
        //   console.error("Error:", error);
        // }
      };

    externals.getUser = async function getJSON(input, cb) {
        const response = await fetch("http://localhost:8080/doraemonAPI/api/"+input);
        console.log(response);
        const player = await response.json()
            .then(cb);

        console.log(player);
      };

    externals.updatePlanet = async function locationJSON(user){
        try {
            let data = {
                "id":user.id,
                "name":user.name,
                "planet": user.planet,
                "hp": user.hp,
                "item": user.item,
                "dorayaki": user.dorayaki
            }
            console.log(data);

          const response = await fetch("http://localhost:8080/doraemonAPI/api/"+user.name, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

       
          const result = await response.json();
          console.log(result);
          console.log("Success:", result);
        } catch (error) {
          console.error("Error:", error);
        }
      };

      externals.deleteUser = async function deleteJSON(user){
        try {
          const response = await fetch("http://localhost:8080/doraemonAPI/api/"+user.name, {
            method: "DELETE",
         
          });

       
          const result = await response.json();
          console.log(result);
          console.log("Success:", result);
        } catch (error) {
          console.error("Error:", error);
        }
      };

    
      
    return externals;
});