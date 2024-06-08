var siteName = document.getElementById("site-name");
var siteUrl = document.getElementById("site-url");
var mainSection = document.getElementById("mainSection");

var bookContainer = [];

function add(){
    var book_mark = { 
        name : siteName.value, 
        url : siteUrl.value }

    bookContainer.push(book_mark)
    console.log(bookContainer);
    display()
    clear()
}

function clear(){
    siteName.value = null
    siteUrl.value = null
}

function display(){
    var container = "";

    for (var i = 0 ; i < bookContainer.length ; i++){
        container += `<div class="container px-4 mb-1">
        <div class="row bg-white">
            <div class="col-lg-3">
                <div class="text-center py-1">
                    <h3 class="fs-6">${i}</h3>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="text-center py-1">
                    <h3 class="fs-6">${bookContainer[i].name}</h3>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="text-center py-1">
                    <a href="https://${bookContainer[i].url}" target="_blank"><button class="btn btn-success"><i class="fa-solid fa-eye"></i>Visit</button></a>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="text-center py-1">
                    <button class="btn btn-danger"><i class="fa-solid fa-trash"></i>Delete</button>
                </div>
            </div>
        </div>
    </div>`
    }

    mainSection.innerHTML = container;
}
// console.log(siteName, siteUrl); testing this upload