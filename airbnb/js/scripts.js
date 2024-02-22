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
}) 





