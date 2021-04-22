
var modal = document.getElementById("myModal");


var images = document.querySelectorAll(".lista4 > li");

for (i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function(){
            
            modal.style.display = "flex";
            modalImg.src = this.children[0].getAttribute('src');
            captionText.innerHTML = this.children[0].getAttribute('alt');
       });
        
    }


var modalImg = document.getElementById("img-modal-grande");
var captionText = document.getElementById("caption");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("circulos-slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    //dots[i].className = dots[i].className.replace(" w3-white", "");
    dots[i].className = dots[i].className.replace(" activo", "");
  }
  /*x[slideIndex-1].style.display = "block"; */
  x[slideIndex-1].style.display = "flex";  /*Cambio nuevo*/ 
  /*x[slideIndex-1].style.transition= "1s";*/
  dots[slideIndex-1].className += " activo";
}
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 1800) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/
 