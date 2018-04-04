window.onload = init;

var menu = ["Works", "Appreciation", "Help", "Members"];

function init(){
    var menu = ["Works", "Appreciation", "Help", "Members"];
    var nav = document.querySelector("nav");
    var sidebar = document.querySelector("i");
    sidebar.onclick = function(){
        if(this.getAttribute("class") === "fa fa-bars"){
            this.setAttribute("class", "fa fa-times");
            updateNav(nav, menu);
        }
        else{
            this.setAttribute("class", "fa fa-bars");
            var a = nav.querySelectorAll("a");
            for(var i=0; i<menu.length; i++){
                nav.removeChild(a[i]);
            }
        }
    };
}

function updateNav(nav, menu){
    for(var i=0; i<menu.length; i++){
        if(menu[i][menu[i].length-1] === "s")
            menu[i] = menu[i].slice(0,menu[i].length-1);
        var a = document.createElement("a");
        a.innerHTML= menu[i];
        a.setAttribute("href", menu[i].toLowerCase() + ".html");
        nav.appendChild(a);
    }
}