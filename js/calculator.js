




// $('#calculate').click(function(){


  

  
// });








// var forms = document.getElementsByClassName('needs-validation');
// var claulate = document.getElementById('calculate')
// // Loop over them and prevent submission
// var validation = Array.prototype.filter.call(forms, function (form) {
//     calculate.addEventListener('click', function (event) {
//         if (form.checkValidity() === false) {
//             event.preventDefault();
//             event.stopPropagation();
            

        
//         }else{

//           // calculator logic 
         

//         }
        
//         form.classList.add('was-validated');
        


        

//     }, false);
// });


// $(function () {
//     $('[data-toggle="tooltip"]').tooltip()
//   });


// var deflectionController;



// var UIController = (function() {

   
    
//     return {
//         getInput: function() {
//             return {
//                 time_lag_factor_option: $('input[name=time_lag_factor_option]:checked').val()
//             };
//         },

//          setEvents : {

        
//             time_lag_factor : {
    
//                 displayPressurezedTimeframe : function(){
                   
//                     $('#garvity_sewer_wrapper').hide();
//                     $('#pressurized_timeframe_wrapper').show();
    
//                 },
    
//                 displayGravitySewerPipeTable: function(){
    
//                     $('#pressurized_timeframe_wrapper').hide();
//                     $('#garvity_sewer_wrapper').show();
    
    
    
//                 }
//             },
    
    
    
    
    
    
//         },
//     };


// })();   




// var controller = (function(UICtrl){

//     $('#calculate').on('click',function(){

//         console.log(UICtrl.getInput());

//        if( UICtrl.getInput().value == 'pressure_pipe'){

//                  UICtrl.setEvents.time_lag_factor.displayPressurezedTimeframe();

       
//        } 
//        else{
//                  UICtrl.setEvents.time_lag_factor.displayGravitySewerPipeTable();

//        }

//     });

// })(UIController);



$('#pressure_pipe').on('click', function(){

    $('#gravity_sewer_wrapper').hide();
    $('#pressurized_timeframe_wrapper').show();

});




$('#gravity_sewer_pipe').on('click', function(){

    $('#pressurized_timeframe_wrapper').hide();
    $('#gravity_sewer_wrapper').show();

});


$('#modulus1').on('click', function(){

    $('#psi_for_modulus1_wrapper').show();
    $('#psi_for_modulus2_wrapper').hide();
    $('#psi_for_custom_modulus_wrapper').hide();

});


$('#modulus2').on('click', function(){

    $('#psi_for_modulus1_wrapper').hide();
    $('#psi_for_modulus2_wrapper').show();
    $('#psi_for_custom_modulus_wrapper').hide();

});

$('#custom_modulus').on('click', function(){

    $('#psi_for_modulus1_wrapper').hide();
    $('#psi_for_modulus2_wrapper').hide();
    $('#psi_for_custom_modulus_wrapper').show();

});





