var data = [
  {
    name: "kshitij",
    src: "https://images.unsplash.com/photo-1606893995103-a431bce9c219?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHMlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "achal",
    src: "https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Ayush",
    src: "https://plus.unsplash.com/premium_photo-1682098022877-593355cd975a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym95c3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Shantanu",
    src: "https://images.unsplash.com/photo-1519764622345-23439dd774f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym95c3xlbnwwfHwwfHx8MA%3D%3D",
  }
]


document.querySelector(".people").innerHTML = pers;
var input = document.querySelector("input");

input.addEventListener("input", () => {
      var matching = data.filter((e)=>{
          return e.name.startsWith(input.value)
      })
  
      var newusers = "";
      matching.forEach((elem) => {
          newusers += `<div class="person">
            <div class="img">
                <img src="${elem.src}" alt="">
            </div>
            <h4>${elem.name}</h4>
        </div>`;
      })
  
      document.querySelector(".people").innerHTML = newusers;
  });

