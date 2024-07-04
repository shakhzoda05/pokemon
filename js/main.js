let elLIst = document.querySelector(".pokemon-list");
let elSelect=document.querySelector(".pokemon-select");
let elInput=document.querySelector(".pokemon-input")
function renderPOkemon(arr, list) {
  list.innerHTML=""
  arr.forEach(item => {
    let elItem = document.createElement("li");
    elItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}"> 
            <div class="flex items-center justify-between gap-[5px]">
                <div>
                    <h2>${item.name}</h2>
                    <p class="flex"> <span></span>Type:</span>${item.type.join(",")}</p>
                </div>
                
                <div>
                    <div class="flex items-center gap-[10px]">
                    <button class="p-[5px] rounded-[5px] border-[2px] border-red-500 text-red-500">Like</button>
                    <button class="p-[5px] rounded-[5px] border-[2px] border-green-500 text-green -500">More</button>
                </div>
            </div> `;
    elItem.className =
      "w-[250px] p-3 border-[1px] border-slate-400 rounded-[5px] flex flex-col justify-center";
    list.append(elItem);
  });
}
function renderSelectOption(arr, list) {
  let listOption = [];
  let sortedOptionContent = [];
  arr.forEach(item => {
    listOption = listOption.concat(item.type);
  });
  listOption.filter(item => {
    if (!sortedOptionContent.includes(item)) {
      sortedOptionContent.push(item);
    }
  });
  console.log(listOption);
  console.log(sortedOptionContent);

  sortedOptionContent.map(item => {
    let elOption = document.createElement("option");
    elOption.value = item;
    elOption.textContent = item;
    list.appendChild(elOption);
  });
}



renderSelectOption(pokemons, elSelect);
renderPOkemon(pokemons, elLIst);

elInput.addEventListener("keyup", (e) =>{
  const inputValue=e.target.value.toLowerCase();
  const searchData=pokemons.filter(item=>item.name.toLowerCase().includes(inputValue))
renderPOkemon(searchData,elLIst)
})

elSelect.addEventListener("change", function(e){
  const selectValue=e.target.value
  const selectedPokemons=pokemons.filter(item=>item.type.includes(selectValue))
  console.log()
  renderPOkemon(selectedPokemons,elLIst)
})



