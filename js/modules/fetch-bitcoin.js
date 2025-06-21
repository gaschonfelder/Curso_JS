// https://blockchain.info/ticker

export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4);
      //console.log(json.BRL.sell);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
