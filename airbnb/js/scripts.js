 
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
    
    
    // image box  one
    $(".image_right").on("click", function(){
        var current = $(".image1 .active");
        var next = current.next();
        if(next.length){
            current.removeClass("active");
            next.addClass("active");
        } else {
            current.removeClass("active");
            $(".image1 img:first-child").addClass("active");
        }
    });
    
    $(".image_left").on("click", function(){
        var current = $(".image1 .active");
        var prev = current.prev();
        if(prev.length){
            current.removeClass("active");
            prev.addClass("active");
            
        } else {
            current.removeClass("active");
            $(".image1 img:last-child").addClass("active");
        }
    });
    // image box  one
   
    $(".left_arrow").on("click", function(){
        var current = $(".image2 .active");
        var next = current.next();
        if(next.length){
            current.removeClass("active");
            next.addClass("active");
        } else {
            current.removeClass("active");
            $(".image2 img:first-child").addClass("active");
        }
    });
    
    $(".right_arow").on("click", function(){
        var current = $(".image2 .active");
        var prev = current.prev();
        if(prev.length){
            current.removeClass("active");
            prev.addClass("active");
        } else {
            current.removeClass("active");
            $(".image2 img:last-child").addClass("active");
        }
    });
    // image box two
    $(".left_arow3").on("click", function(){
        var current = $(".image3 .active");
        var next = current.next();
        if(next.length){
            current.removeClass("active");
            next.addClass("active");
        } else {
            current.removeClass("active");
            $(".image3 img:first-child").addClass("active");
        }
    });
    
    $(".right_arow3").on("click", function(){
        var current = $(".image3 .active");
        var prev = current.prev();
        if(prev.length){
            current.removeClass("active");
            prev.addClass("active");
        } else {
            current.removeClass("active");
            $(".image3 img:last-child").addClass("active");
        }
    });

    // image box three

    $(".left_image4").on("click", function(){
        var current = $(".image4 .active");
        var next = current.next();
        if(next.length){
            current.removeClass("active");
            next.addClass("active");
        } else {
            current.removeClass("active");
            $(".image4 img:first-child").addClass("active");
        }
    });
    
    $(".right_image4").on("click", function(){
        var current = $(".image4 .active");
        var prev = current.prev();
        if(prev.length){
            current.removeClass("active");
            prev.addClass("active");
        } else {
            current.removeClass("active");
            $(".image4 img:last-child").addClass("active");
        }
    });
    



    
    
}) 

function Like(element) {
    const like = element.querySelector("i")
    if (like.style.color === "gray"){
        like.style.color = "red"
    }
    else{
        like.style.color = "gray"
    }
}




