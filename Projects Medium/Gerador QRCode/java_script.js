function Gerar(){
    var Conteudo = document.querySelector('textarea').value;
    var API = 'https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=';
    var QRCode = API + Conteudo;
    document.querySelector('#QRimage').src = QRCode;
}