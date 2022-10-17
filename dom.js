var btnadd=document.getElementsByClassName('btn-add');
var tab=[];
for (let i =0;  i< btnadd.length;i++) {
    tab[i]=false;



}console.log(tab)
// console.log(btnadd)
for (let i = 0; i < btnadd.length; i++) {
    btnadd[i].addEventListener('click',function(){
        if (tab[i]==true) {
            alert('le prod est ajouté au panier')
        } else {


/*create div element*/
var divprod=document.createElement('div');
divprod.setAttribute('class','prod');
var panier=document.getElementById('cart');
panier.appendChild(divprod);
/*create title element*/
var title=document.createElement('p');
title.setAttribute('class','name');
divprod.appendChild(title);
/*create image element*/
var image=document.createElement('img');
image.setAttribute('class','imo');
divprod.appendChild(image);
/*create price unit element*/
var price=document.createElement('p');
price.setAttribute('class','punit');
divprod.appendChild(price);

/*create quantity element*/
//div quantity
var divqte=document.createElement('div');
divqte.setAttribute('class','qte');
divprod.appendChild(divqte);
//btn+
var btnplus=document.createElement('button');
btnplus.setAttribute('class','plus');
// console.log(btnplus)
divqte.appendChild(btnplus);
//qte value

var qtevalue=document.createElement('p');
qtevalue.setAttribute('class','qtevalue');
divqte.appendChild(qtevalue);

//btn-
var btnmoins=document.createElement('button');
btnmoins.setAttribute('class','moins');
divqte.appendChild(btnmoins);
//prix total
var pricet=document.createElement('p');
pricet.setAttribute('class','pt');
divprod.appendChild(pricet);
//delete btn
var btndel=document.createElement('button');
btndel.setAttribute('class','del');
divprod.appendChild(btndel);
   // values
            //quantity
   btnplus.innerHTML='+';
   btnmoins.innerHTML='-';
   qtevalue.innerHTML=1;
   btndel.innerHTML='X';
    //name
    var divparent=btnadd[i].parentElement;
     //console.log(divparent)
     var titleprod=divparent.querySelector('.title').innerHTML;
     title.innerHTML=titleprod;
    //console.log(titleprod)

//image
image.src=divparent.querySelector('img').src;
//prix unitaire

price.innerHTML=divparent.querySelector('.price').innerHTML;
pricet=price.innerHTML;

tab[i]=true;}

//console.log(tab)
