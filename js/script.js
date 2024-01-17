
function hitungLuas(){
      const sisiPersegi = document.getElementById("squareSisi");
      const sisi = parseFloat(sisiPersegi.value);
      const outputElement = document.getElementById("outputLuas");

      /*mengecek input apakah angka valid atau bukan*/
      if(isNaN(sisi)){
        console.error("Input is not a valid number");
        /*Output pada halaman web */
        outputElement.innerHTML = "Input is not a valid number";
        return;
      }
      const luasPersegi = sisi * sisi;
      console.log("L = S x S");
      console.log(`L = ${sisi} * ${sisi}`);
      console.log(`L = ${luasPersegi}`);

      /*tampilkan output pada halaman web*/
      
      outputElement.innerHTML = "L = S x S <br> ";
      outputElement.innerHTML += ` L = ${sisi} * ${sisi} <br>`;
      outputElement.innerHTML += ` L = ${luasPersegi} `;

}


function hitungKeliling(){
  const sisiPersegi = document.getElementById("squareSisi2");
  const sisi = parseFloat(sisiPersegi.value);
  const outputElement = document.getElementById("outputKeliling");

  /*mengecek input apakah angka valid atau bukan*/
  if(isNaN(sisi)){
    console.error("Input is not a valid number");
    /*Output pada halaman web */
    outputElement.innerHTML = "Input is not a valid number";
    return;
  }
  const kelilingPersegi = 4 * sisi;
  console.log("K = 4 x S");
  console.log(`K = 4 * ${sisi}`);
  console.log(`K = ${kelilingPersegi}`);

  /*tampilkan output pada halaman web*/
  outputElement.innerHTML = "K = 4 x S <br> ";
  outputElement.innerHTML += ` K = 4 * ${sisi} <br>`;
  outputElement.innerHTML += ` K = ${kelilingPersegi} `;

}


function resetLuas(){

    document.getElementById("squareSisi").value = "";

    const outputElement = document.getElementById("outputLuas");
    outputElement.innerHTML = "";
}


function resetKeliling(){

  document.getElementById("squareSisi2").value = "";

  const outputElement = document.getElementById("outputKeliling");
  outputElement.innerHTML = "";
}