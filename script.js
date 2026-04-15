let selectedProduct = "";
let selectedPrice = 0;

function showSection(id){
    document.getElementById("about").style.display = "none";
    document.getElementById("market").style.display = "none";
    document.getElementById(id).style.display = "block";
}

function logout(){
    window.location.href = "index.html";
}

function goJual(){
    window.location.href = "jual.html";
}

function showProduct(name, price){
    selectedProduct = name;
    selectedPrice = price;

    document.getElementById("popup").style.display = "flex";
    document.getElementById("productName").innerText = name;
    document.getElementById("price").innerText = "Harga: Rp" + price;
}

function closePopup(){
    document.getElementById("popup").style.display = "none";
}

function beli(){
    let text = "Saya ingin membeli " + selectedProduct + " seharga Rp" + selectedPrice;
    window.open("https://wa.me/6285708829924?text=" + encodeURIComponent(text));
}
