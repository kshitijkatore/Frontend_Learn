// Handling Asynchronous Operations
//ek buutton banao  ans us button ke click par aapko ek user leakar anna hai.random tarike ke se and use add karna hai.

const getuser = document.querySelector("#getuser").addEventListener("click", getNewUser);


function getNewUser(){
    fetch(`https://randomuser.me/api/`)
.then(raw => raw.json())
.then(result =>{
    const {name, email, gender, picture} = result.results[0];
    // console.log(result.results[0]);
    document.querySelector("#parent").innerHTML += `<div class="card w-60 p-4 rounded-md bg-zinc-800">
    <div class="w-16 h-16 bg-zinc-500 rounded-2xl mb-2.5 overflow-hidden">
        <img src="${picture.large}" class="w-full h-full fit-cover"  alt="">
    </div>
    <h3 class="font semibold text-2xl">${name.first}</h3>
    <h5 class="text-md font-semibold opacity-70">${gender}</h5>
    <h6 class="text-sm opacity-40">${email}</h6>
    <p class="mt-5 text-xs font-semibold opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repellendus veniam tempore neque?</p>
</div>` ;
})

}