




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













var calculateDeflection;



var UIController = (function () {


    return {

            // Start:: section visibility
        
     setSectionVisibility: {



            time_lag_factor: {

                display_pressurezed_timeframe: $('#pressure_pipe').on('click', function () {

                    $('#gravity_sewer_wrapper').hide();
                    $('#pressurized_timeframe_wrapper').show();

                }),

                display_gravity_sewer_pipe_table: $('#gravity_sewer_pipe').on('click', function () {

                    $('#pressurized_timeframe_wrapper').hide();
                    $('#gravity_sewer_wrapper').show();

                }),
            },


            pipe_stiffness: {


                display_psi_for_modulus1: $('#modulus1').on('click', function () {

                    $('#psi_for_modulus1_wrapper').show();
                    $('#psi_for_modulus2_wrapper').hide();
                    $('#psi_for_custom_modulus_wrapper').hide();

                }),

                display_psi_for_modulus2: $('#modulus2').on('click', function () {

                    $('#psi_for_modulus1_wrapper').hide();
                    $('#psi_for_modulus2_wrapper').show();
                    $('#psi_for_custom_modulus_wrapper').hide();

                }),


                display_psi_for_custom_modulus: $('#custom_modulus').on('click', function () {

                    $('#psi_for_modulus1_wrapper').hide();
                    $('#psi_for_modulus2_wrapper').hide();
                    $('#psi_for_custom_modulus_wrapper').show();

                })



            },


            liveLoad: {

                hide_max_wheel_and_pipe_diameter: $('#no_live_load, #highway, #railway, #hs20_loading, #hs25_loading, #coopers_e80, #airport').on('click', function () {

                    $('#max_wheel_and_pipe_diameter_wrapper').hide();

                }),

                display_max_wheel_and_pipe_diameter: $('#single_wheel_load, #two_passing_trucks').on('click', function () {

                    $('#max_wheel_and_pipe_diameter_wrapper').show();

                })

            },



            natural_or_in_place_soil_modulus: {

                display_ucs_table: $('#unconfined_compressive_strength').on('click', function () {

                    $('#ucs_table_wrapper').show();
                    $('#spt_table_wrapper').hide();


                }),

                display_spt_table: $('#spt').on('click', function () {

                    $('#ucs_table_wrapper').hide();
                    $('#spt_table_wrapper').show();


                })

            }



        },


        // End:: section visibility


        getInput: function () {
           
            return {
                time_lag_factor_option: $('input[name=time_lag_factor_option]:checked').val()
            };
        },








    };


})();




var controller = (function (UICtrl) {

    $('#calculate').on('click', function () {

        console.log(UICtrl.getInput());


    });

})(UIController);






// (function setEvents(){


//     // showing and hiding divs

//     $('#pressure_pipe').on('click', function(){

//         $('#gravity_sewer_wrapper').hide();
//         $('#pressurized_timeframe_wrapper').show();
    
//     });




//     $('#gravity_sewer_pipe').on('click', function(){

//         $('#pressurized_timeframe_wrapper').hide();
//         $('#gravity_sewer_wrapper').show();
    
//     });
    
    
//     $('#modulus1').on('click', function(){
    
//         $('#psi_for_modulus1_wrapper').show();
//         $('#psi_for_modulus2_wrapper').hide();
//         $('#psi_for_custom_modulus_wrapper').hide();
    
//     });
    
    
//     $('#modulus2').on('click', function(){
    
//         $('#psi_for_modulus1_wrapper').hide();
//         $('#psi_for_modulus2_wrapper').show();
//         $('#psi_for_custom_modulus_wrapper').hide();
    
//     });
    
//     $('#custom_modulus').on('click', function(){
    
//         $('#psi_for_modulus1_wrapper').hide();
//         $('#psi_for_modulus2_wrapper').hide();
//         $('#psi_for_custom_modulus_wrapper').show();
    
//     });

    
//     $('#no_live_load, #highway, #railway, #hs20_loading, #hs25_loading, #coopers_e80, #airport').on('click', function(){
    
//         $('#max_wheel_and_pipe_diameter_wrapper').hide();
       
//     });

//     $('#single_wheel_load, #two_passing_trucks').on('click', function(){
    
//         $('#max_wheel_and_pipe_diameter_wrapper').show();
       
//     });


//     $('#unconfined_compressive_strength').on('click', function(){
    
//         $('#ucs_table_wrapper').show();
//         $('#spt_table_wrapper').hide();

       
//     });


//     $('#spt').on('click', function(){
    
//         $('#ucs_table_wrapper').hide();
//         $('#spt_table_wrapper').show();

       
//     });





    
    
    
    
    
    
    
// })();

