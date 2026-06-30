function calcular(){

    let area = Number(document.getElementById("area").value);

    let consumo = Number(document.getElementById("cultura").value);

    if(area <= 0){

        alert("Digite uma área válida!");

        return;
    }

    let total = area * consumo;

    let economia = total * 0.30;

    document.getElementById("resultado").innerHTML =
    `
    Consumo estimado: <br><br>

    <strong>${total.toLocaleString()} litros de água</strong>

    <br><br>

    Utilizando irrigação por gotejamento você pode economizar aproximadamente

    <strong>${economia.toLocaleString()} litros.</strong>
    `;
}