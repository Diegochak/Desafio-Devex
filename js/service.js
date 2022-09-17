var requestOptions = {
  method: "GET",
  redirect: "follow",
};
fetch(
  "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key=L3Tqb4e8TF0nkmdVzVIfehH8t5PRHVJP1m3ShhQ5",
  requestOptions
)
  //buscando na api
  .then((response) => response.json())
  .then((result) => {
    const pictaken = result.photos.map(
      (i) =>
        `<div class="marte">
    <div class="modal" id="modal-${i.img_src}">
    <img class="camera-in-modal" src="${i.img_src}" height="80%" alt="" />
      </div>
      <img class="camera0" src="${i.img_src}" width="337px" height="211px" alt="" />
      <p class="data">Date: ${i.earth_date}</p>
      <div class="text">
        <p class="desc">${i.camera.full_name}</p>
      </div>
      <div class="botao2">
        <button class="botao" onclick="abrirModal('modal-${i.img_src}')"><b>Ver</b></button>
      </div>
    </div>`
    );
    document.getElementById("import").innerHTML = pictaken;
  })
  .catch((error) => console.log("error", error));

//modal p exibir na tela

function abrirModal(element_id) {
  const modal = document.getElementById(element_id);
  modal.style.display = "flex";
  window.onclick = (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  };
}
