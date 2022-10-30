function computarplazo(){
    const monto = document.querySelector('#monto').value;
    const tasaDeInteres = document.querySelector('#tasaDeInteres').value;
    const meses = document.querySelector('#meses').value;
    const interes = (monto * (tasaDeInteres * 0.01)) / meses;
    let pago = ((monto / meses) + interes).toFixed(2); 

    pago = pago.toString();
    document.querySelector('#pago').innerHTML = `Pago Mensual = ${pago}`
}