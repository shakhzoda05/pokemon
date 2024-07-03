let elLIst = document.querySelector(".pokemon-list");

function renderPOkemon(arr, list) {
  arr.forEach((item) => {
    let elItem = document.createElement("li");
    elItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}"> 
            <div class="flex items-center justify-between">
                <div>
                    <h2>${item.name}</h2>
                    <p>Type:${item.type[0]}</p>
                </div>
                <div>
                    <div class="flex items-center gap-[10px]">
                    <button class="p-[5px] rounded-[5px] border-[2px] border-red-500 text-red-500">Like</button>
                    <button class="p-[5px] rounded-[5px] border-[2px] border-green-500 text-green-500">More</button>
                </div>
            </div> `;
    elItem.className =
      "w-[250px] p-3 border-[1px] border-slate-400 rounded-[5px] flex flex-col justify-center";
    list.append(elItem);
  });
}
renderPOkemon(pokemons.splice(0, 20), elLIst);
