




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

                hide_max_wheel_and_pipe_diameter: $('.hide_max_wheel_and_pipe_diameter_wrapper').on('click', function () {

                    $('#max_wheel_and_pipe_diameter_wrapper').hide();

                }),

                display_max_wheel_and_pipe_diameter: $('.show_max_wheel_and_pipe_diameter_wrapper').on('click', function () {

                    $('#max_wheel_and_pipe_diameter_wrapper').show();

                })

            },

            bedding_constant: {

                enable_your_value: $('#bcs_your_value_option').on('click', function () {
                    $('#bcs_your_value_input').prop('disabled', false);
                }),



                disable_your_value: $('.bcs_dis_yv').on('click', function () {
                    $('#bcs_your_value_input').prop('disabled', true);
                }),

            },

            combined_unit: {

                enable_your_value: $('#wob_your_value_option').on('click', function () {
                    $('#wob_your_value_input').prop('disabled', false);
                }),



                disable_your_value: $('.wob_dis_yv').on('click', function () {
                    $('#wob_your_value_input').prop('disabled', true);
                }),

            },

            
            
            ebedment_soil_modulus:{

                uncheck_radio: $('#eb_for_bedding_soil').click(function () {
                    $('input[name=embedment_soil]:checked').prop("checked", false);
          
                }),

            },




            natural_or_in_place_soil_modulus: {

                display_ucs_table: $('#unconfined_compressive_strength').on('click', function () {

                    $('#ucs_table_wrapper').show();
                    $('#spt_table_wrapper').hide();


                }),

                display_spt_table: $('#spt').on('click', function () {

                    $('#ucs_table_wrapper').hide();
                    $('#spt_table_wrapper').show();


                }),


                uncheck_radio: $('#en_for_native_soil').click(function () {
                    $('input[name=en]:checked').prop("checked", false);
          
                }),

            },





        },


        // End:: section visibility








        getInput: function () {

            return {
                time_lag_factor_option: $('input[name=time_lag_factor_option]:checked').val()
            };
        },





        // Start:: display user input

        display_input: {

            display_time_lag_factor_input: {

                display_pressurized_timeframe_value: $('#pressurized_timeframe').on('change', function () {

                    var pressurized_timeframe = $('#pressurized_timeframe').val();
                    $('#tl_value').text(pressurized_timeframe);



                }),


                display_gravity_sewer_value: $('input[name=soil_group]').on('click', function () {

                    var gravity_sewer = $('input[name=soil_group]:checked').val();
                    $('#tl_value').text(gravity_sewer);



                }),

            },





            display_pipe_stiffness_input: {

                display_psi_for_modulus1_value: $('#psi_for_modulus1').on('change', function () {

                    var modulus1_value = $('#psi_for_modulus1').val();
                    $('#pipe_stiffness_value').text(modulus1_value);



                }),

                display_psi_for_modulus2_value: $('#psi_for_modulus2').on('change', function () {

                    var modulus2_value = $('#psi_for_modulus2').val();
                    $('#pipe_stiffness_value').text(modulus2_value);



                }),

                display_psi_for_custom_modulus: $('#psi_for_custom_modulus').on('keyup', function () {

                    var custom_modulus_value = $('#psi_for_custom_modulus').val();
                    $('#pipe_stiffness_value').text(custom_modulus_value);



                }),

            },


            display_live_load_input: {

                live_load_value: $('input[name=live_load]').on('click', function () {

                    var live_load = $('input[name=live_load]:checked').val();
                    $('#display_live_load_value').text(live_load);



                }),

            },


            display_depth_of_burial_input: {


                display_start: $('#start').on('keyup', function () {

                    var start = $('#start').val();
                    $('#show_start_value').text(start);



                }),

                display_end: $('#end').on('keyup', function () {

                    var end = $('#end').val();
                    $('#show_end_value').text(end);



                }),


                display_increment: $('#increment').on('keyup', function () {

                    var increment = $('#increment').val();
                    $('#show_increment_value').text(increment);



                }),




            },



            display_bedding_constant: {

                bedding_angle: $('input[name=bcs]').on('click', function () {

                    var constant_value = $('input[name=bcs]:checked').val();
                    $('#show_constant_value').text(constant_value);
                    $('#bcs_your_value_input').val(constant_value);
                }),

                your_value: $('#bcs_your_value_input').on('keyup', function () {

                    var your_value = $('#bcs_your_value_input').val();
                    $('#show_constant_value').text(your_value);



                }),



            },


            display_ws: {

                ws: $('input[name=wob]').on('click', function () {

                    var ws = $('input[name=wob]:checked').val();
                    $('#show_combined_unit_weight').text(ws);
                    $('#wob_your_value_input').val(ws);
                }),

                your_value: $('#wob_your_value_input').on('keyup', function () {

                    var your_value = $('#wob_your_value_input').val();
                    $('#show_combined_unit_weight').text(your_value);



                }),


            },





            display_eb: {

               eb: $('input[name=embedment_soil]').on('click', function () {

                    var eb = $('input[name=embedment_soil]:checked').val();
                    $('#show_eb').text(eb);
                    $('#eb_for_bedding_soil').val(eb);
                }),

                eb_for_bedding_soil: $('#eb_for_bedding_soil').on('keyup', function () {

                    var eb_for_bedding_soil = $('#eb_for_bedding_soil').val();
                    $('#show_eb').text(eb_for_bedding_soil );



                }),


            },



            display_en: {

                en: $('input[name=en]').on('click', function () {
 
                     var en = $('input[name=en]:checked').val();
                     $('#show_en').text(en);
                     $('#en_for_native_soil').val(en);
                 }),
 
                 en_for_native_soil : $('#en_for_native_soil').on('keyup', function () {
 
                     var en_for_native_soil = $('#en_for_native_soil').val();
                     $('#show_en').text(en_for_native_soil);
 
 
 
                 }),
 
 
             },



             display_pipe_diameter: $('#pipe_diameter').on('change', function () {

                var pipe_diameter = $('#pipe_diameter').val();
                $('#show_pipe_diameter').text(pipe_diameter );



            }),

            display_trench_width: $('#trench_width').on('keyup',function(){
                var trench_width = $('#trench_width').val();
                $('#show_trench_width').text(trench_width);
            }),
             


















        },

        // End :: display user input










    };


})();




var controller = (function (UICtrl) {

    $('#calculate').on('click', function () {

        console.log(UICtrl.getInput());


    });

})(UIController);







    // showing and hiding divs

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


// // showing user input
//     $('#pressurized_timeframe').on('change', function(){

//        var pressurized_timeframe =  $('#pressurized_timeframe').val();
//        $('#tl_value').text(pressurized_timeframe);



//     });

//     $('input[name=soil_group]').on('click', function(){

//         var gravity_sewer =  $('input[name=soil_group]:checked').val();
//         $('#tl_value').text(gravity_sewer);



//      });










