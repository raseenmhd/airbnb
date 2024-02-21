$(document).ready(function() { 
 
    $(function() { 
        $("#my_date_picker1").
        datepicker({}); 
    }); 

    $(function() { 
        $("#my_date_picker2").
        datepicker({}); 
    }); 

    $('#my_date_picker1').change(function() { 
        startDate = $(this).
        datepicker('getDate'); 
        $("#my_date_picker2").
        datepicker("option", "minDate", startDate); 
    }) 

    $('#my_date_picker2').change(function() { 
        endDate = $(this).
        datepicker('getDate'); 
        $("#my_date_picker1").
        datepicker("option", "maxDate", endDate); 
    }) 
}) 