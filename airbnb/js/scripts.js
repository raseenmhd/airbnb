 
$(document).ready(function() { 
 
    $(function() { 
        $("#date_picker1").
        datepicker({}); 
    }); 

    $(function() { 
        $("#date_picker2").
        datepicker({}); 
    }); 

    $('#date_picker1').change(function() { 
        startDate = $(this).
        datepicker('getDate'); 
        $("#date_picker2").
        datepicker("option", "minDate", startDate); 
    }) 

    $('#date_picker2').change(function() { 
        endDate = $(this).
        datepicker('getDate'); 
        $("#date_picker1").
        datepicker("option", "maxDate", endDate); 
    }) 

    $(function(){
        document.querySelector('.profile').addEventListener('click', function(event){
            event.stopPropagation();
            document.querySelector(".profile_popup").style.display = (document.querySelector(".profile_popup")
            .style.display === "block") ? "none" : "block";
        })

        document.querySelector('body').addEventListener('click', function(){
            document.querySelector(".profile_popup").style.display = "none";
        })  
    })

    $(function(){
        $(".owl-carousel").owlCarousel(
        {
            items : 8,
            loop : true,
            margin : 10,
            
        }
        );
      });
      $(".img_left").click(function(){
        $(".owl-carousel").trigger("prev.owl.carousel")
      })
      $(".img_right").click(function(){
        $(".owl-carousel").trigger("next.owl.carousel")
      })

    $(function(){
        var toggle = document.querySelector(".toggle_button")

        toggle.addEventListener("click", function(){
            toggle.classList.toggle("active")
        })
    })
    
    
    // $(function(){
    //     $("#dino-example").owlCarousel({
    //             items: 1,
    //             singleItem: true,
    //             nav: false,
    //         })
    //     $(".image_left").click(function(){
    //         $("#dino-example").trigger("prev.owl.carousel")
    //         })
    //     $("image_right").click(function(){
    //         $("#dino-example").trigger("next.owl.carousel")
    //     })
    // })
    
    
}) 
function showSlides(event){
    let i;
    let slide = document.querySelector(".carousel");
    if (n > slide.lenght) {
        slide[i] 
    }
}


function Like(element) {
    const like = element.querySelector("i")
    if (like.style.color === "gray"){
        like.style.color = "red"
    }
    else{
        like.style.color = "gray"
    }
}




