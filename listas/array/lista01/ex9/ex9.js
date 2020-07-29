
var imagem = ["https://www.revistaplaneta.com.br/wp-content/uploads/sites/3/2018/06/12_pl540_unesco1.jpg",
               "https://fazendacapoava.com.br/wp-content/uploads/2019/09/natureza.jpg",
               "https://abrilsuperinteressante.files.wordpress.com/2016/09/super_imgcontato_com_natureza.jpg",
               "https://www.viagenscinematograficas.com.br/wp-content/uploads/2018/06/7-Maravilhas-da-Natureza-Brasil-Capa-740x431.jpg",
               "https://cdn.domtotal.com/img/exclusivas/466_1294.jpg",
               "https://img.elo7.com.br/product/zoom/17A04B0/painel-paisagem-natureza-m-painel-infantil.jpg",
               "https://images-americanas.b2w.io/produtos/01/00/sku/37626/0/37626096_1GG.jpg",
               "https://soucatequista.com.br/wp-content/uploads/2011/01/Natureza.jpg",
               "https://s2.glbimg.com/mAZeid-fm10T9X31kTdrva1tsnQ=/0x0:1600x1063/984x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2017/07/25/dsc-6044.jpg",
               "https://blog.emania.com.br/wp-content/uploads/2015/10/fotos-de-natureza.jpg"];

function geraRandomInt(){
   return Math.floor(Math.random() * Math.floor(imagem.length));
};
function geraImagens(){
   var a = 0;

   a = geraRandomInt();

   img = "<img src='" + imagem[a] + "'>";

   document.getElementById("imagem").innerHTML = img;
}






