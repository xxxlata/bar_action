function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event){
    if (!event.target.matches('.click_dropbtn')) {
        var dropdowns = document.getElementsByClassName("click_dropdown-contnet");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns [i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}