











var calculateDeflection = (function(){


    return{

        w_sub_l : function (llc , db){
    
    
    
            var live_load = 0;
            
        
            console.log( "depth of burial: " + db);
            console.log("live load category : " + llc);
        
               
               if(llc == 'HS20 Loading' || llc == 'HS25 Loading'){
           
                   var wheel_load = 0;
           
                   if(llc == 'HS20 Loading'){
                       wheel_load = 16000;
                   }
           
                   if(llc == 'HS25 Loading'){
                       wheel_load = 20000;
                   }
           
                   
           
                   var LLDF = 1 ;
           
                   var IF = 1 + 0.33 * (96 - db * 12) / 96 ;
           
                   IF < 1 ? 1 : IF;
                   
                   var H_int = (72 - 20 ) / LLDF ;
           
                   var L1 = 10 + db * LLDF * 12 ; 
           
                   var L2 = 0 ;
           
                   if(db * 12 < H_int){
                       
                       L2 = 20 + LLDF * db * 12 ;
                   }
                   else{
                       L2 = (20 + 72 + LLDF * db * 12)/2;
                   }
           
                    live_load = 1.2 * wheel_load * (IF /L1/ L2);
        
                   console.log("H int : " + H_int);
                   console.log("Wheel load : "+ wheel_load);
        
                   console.log("IF: " + IF);
                   console.log("LLDF: " + LLDF);
                   console.log("L1: " + L1);
                   console.log("L2: " + L2);
           
                   console.log("Live load : "+live_load);
        
                }
        
                
                
                if(llc == 'E80 Railway'){
                    
                    var IF_table = [];
                    var IF;
                    var C;
                    var A = 10;
                    var B = 4;
        
                    var H = db;
        
                    for ( var x = 1.4 ; x >0.95 ; x = x - 0.04){
                        IF_table.push(x);
                    }
        
                    if(db >=0 && db<=10 ){
                   
                        IF = (IF_table[db]).toFixed(2);
                    }
                    else{
        
                        IF = 1.00;
        
                    }
        
                  
        
        
                    var term1 =  (2/Math.PI);
        
                    var term2 = H * Math.sqrt( ( Math.pow(A,2) + Math.pow(B,2)+ Math.pow(H,2)) /  ((Math.pow(A,2) + Math.pow(H,2))*(Math.pow(B,2) + Math.pow(H,2))) );
        
                    var term3 = (A * B * H) /Math.sqrt(Math.pow(A,2)+Math.pow(B,2)+Math.pow(H,2));
        
                    var term4 = ( (1/(Math.pow(A,2) + Math.pow(H,2))) + (1/(Math.pow(B,2) + Math.pow(H,2))));
        
                  
                    C =  1 - term1 *  ( (Math.asin(term2)) -  (term3 * term4)  );
        
                    live_load = C * 14.0625 * IF ; 
        
                   
        
        
                
        
        
                    console.log("C: " +  C); 
        
                    console.log("IF Table: " + IF_table);
                    console.log("IF: " + IF);
        
                    console.log("live load: " + live_load);
        
        
        
        
        
        
                }
        
                if(llc == 'none'){
                    live_load = 0;
                }
        
                if(llc == '0 PSI'){
                    live_load = parseFloat($('#custom_live_load_input').val());
                }
        
                
        
                return live_load;
           },


                    // calculating eb/en

          
           eb_by_en : function (eb , en){
        
        
            return eb/en;
        
        
        
           },

           
   // calculating B/d (trench width / pipe diameter)

            B_by_d : function(tw, pd){

                        return tw/pd;

                            },


                            // calculating del_f


                    del_f : function(Bd){

                        return Math.min((Bd - 1)/(0.982+0.283*(Bd-1)),1.667);
                    
                    },

                    
                    
                    // calculating S_sub_c
     
                    S_sub_c : function(del_f, eb_by_en ){

                        return 1.667/(del_f+(1.667-del_f) * eb_by_en);

                    },


                    // calculating E_prime

                    E_prime : function(S_sub_c, E_prime_b){
                        
                        return S_sub_c * E_prime_b;
                    
                        },

                                
            // calculating dead load

            dead_load : function(w_sub_e , depth_of_burial){
                return w_sub_e * depth_of_burial / 144;
                },



            // calculating deflection


        deflection : function(bedding_constant , time_lag_factor , dead_load, w_sub_l , w_sub_s, pipe_stiffness, E_prime){


            return bedding_constant * (time_lag_factor * dead_load + w_sub_l + w_sub_s ) / (0.149 * pipe_stiffness + 0.061 * E_prime);

    

    },

    total_load : function(dl , ll){
        return dl + ll;
    },







        
    

    }

    


       



})();



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

                enable_custom_live_load: $('#custom_live_load_option').on('click', function () {
                    $('#custom_live_load_input').prop('disabled', false);
                }),



                disable_custom_live_load: $('.disable_custom_live_load_input').on('click', function () {
                    $('#custom_live_load_input').prop('disabled', true);
                }),

            },

            bedding_constant: {

                enable_your_value: $('#bcs_your_value_option').on('click', function () {
                    $('#bcs_your_value_input').prop('disabled', false);
                }),



                disable_your_value: $('.bcs_dis_yv').on('click', function () {
                    $('#bcs_your_value_input').prop('disabled', true);
                }),

            },

            w_sub_e: {

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
                time_lag_factor_option: $('input[name=time_lag_factor_option]:checked').val(),
                
                
                time_lag_factor : parseFloat($('#tl_value').text()),
                pipe_stiffness : parseFloat($('#pipe_stiffness_value').text()),
                live_load_category : $('input[name=live_load]:checked').val(),
                depth_of_burial : parseFloat($('#show_depth_of_burial').text()),
                bedding_constant : parseFloat($('#show_constant_value').text()),
                earth_load : parseFloat($('#show_combined_unit_weight').text()),
                surcharge_load: parseFloat($('#show_surcharge_load').text()),
                embedment_soil_modulus : parseFloat($('#show_eb').text()),
                in_place_soil_modulus : parseFloat($('#show_en').text()),
                pipe_diameter: parseInt($('#show_pipe_diameter').text()),
                trench_width : parseInt($('#show_trench_width').text()),

              
                
                
            };
        },





        // Start:: display user input

        display_user_input: {

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


                display_psi_for_clicking_modulus1: $('#modulus1').on('click', function () {

                    var modulus1 = $('#psi_for_modulus1').val();
                    $('#pipe_stiffness_value').text(modulus1);



                }),

                display_psi_for_clicking_modulus2: $('#modulus2').on('click', function () {

                    var modulus2 = $('#psi_for_modulus2').val();
                    $('#pipe_stiffness_value').text(modulus2);



                }),

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

                display_custom_modulus_option_value :  $('#custom_modulus').on('click', function () {

                    var custom_modulus_option = $('#psi_for_custom_modulus').val();
                    $('#pipe_stiffness_value').text(custom_modulus_option);



                }),


            },


            display_live_load_input: {

                live_load_value: $('input[name=live_load]').on('click', function () {

                    var live_load = $('input[name=live_load]:checked').val();
                    
                    $('#display_live_load_value').text(live_load);



                }),

                custom_live_load_input : $('#custom_live_load_input').on('keyup', function () {

                    var custom_live_load = $('#custom_live_load_input').val();
                   
                    $('#display_live_load_value').text(custom_live_load + " PSI");



                }),

                custom_live_load_option : $('#custom_live_load_option').on('click',function(){

                    var custom_live_load = $('#custom_live_load_input').val();
                    $('#display_live_load_value').text(custom_live_load + " PSI");

                }),

            },


            display_depth_of_burial_input: {


                display_depth_of_burial_input: $('#depth_of_burial').on('keyup', function () {

                    var depth_of_burial = $('#depth_of_burial').val();
                    $('#show_depth_of_burial').text(depth_of_burial);



                }),

                // display_end: $('#end').on('keyup', function () {

                //     var end = $('#end').val();
                //     $('#show_end_value').text(end);



                // }),


                // display_increment: $('#increment').on('keyup', function () {

                //     var increment = $('#increment').val();
                //     $('#show_increment_value').text(increment);



                // }),




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


            display_w_sub_e: {

                w_sub_e: $('input[name=wob]').on('click', function () {

                    var w_sub_e = $('input[name=wob]:checked').val();
                    $('#show_combined_unit_weight').text(w_sub_e);
                    $('#wob_your_value_input').val(w_sub_e);
                }),

                your_value: $('#wob_your_value_input').on('keyup', function () {

                    var your_value = $('#wob_your_value_input').val();
                    $('#show_combined_unit_weight').text(your_value);



                }),


            },


            display_w_sub_s:{

                w_sub_s : $('#surcharge_load').on('keyup',function(){
                    var surcharge_load = $('#surcharge_load').val();
                    $('#show_surcharge_load').text(surcharge_load);

                    console.log(surcharge_load);

                } ),

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





        // start:: display result


        display_result : function(db, dflc , dl , ll , tl){


            $('.result').show();

            $('#db').text(db.toLocaleString(undefined, { maximumFractionDigits: 2 }));
            $('#dflc').text(dflc.toLocaleString(undefined, { maximumFractionDigits: 2 }));
            $('#dld').text(dl.toLocaleString(undefined, { maximumFractionDigits: 2 }));
            $('#ll').text(ll.toLocaleString(undefined, { maximumFractionDigits: 2 }));
            $('#tl').text(tl.toLocaleString(undefined, { maximumFractionDigits: 2 }));


        },










    };


})();




var controller = (function (UICtrl, calcDef) {

   







    $('#calculate').on('click', Result);


 function Result(){



    var live_load_category = UICtrl.getInput().live_load_category;
    var depth_of_burial = UICtrl.getInput().depth_of_burial;
    var time_lag_factor =  UICtrl.getInput().time_lag_factor;
    var pipe_stiffness = UICtrl.getInput().pipe_stiffness;
    var depth_of_burial = UICtrl.getInput().depth_of_burial;
    var bedding_constant = UICtrl.getInput().bedding_constant;
    var w_sub_e = UICtrl.getInput().earth_load;
    var w_sub_s = UICtrl.getInput().surcharge_load;
    var E_prime_b = UICtrl.getInput().embedment_soil_modulus;
    var E_prime_n = UICtrl.getInput().in_place_soil_modulus;
    var pipe_diameter = UICtrl.getInput().pipe_diameter;
    var trench_width = UICtrl.getInput().trench_width; 



   

     var w_sub_l = calcDef.w_sub_l(live_load_category, depth_of_burial);
     var eb_by_en = calcDef.eb_by_en(E_prime_b, E_prime_n);
     var B_by_d = calcDef.B_by_d(trench_width, pipe_diameter);
     var del_f = calcDef.del_f(B_by_d);
     var S_sub_c = calcDef.S_sub_c(del_f, eb_by_en);
     var E_prime = calcDef.E_prime(S_sub_c, E_prime_b);
     var dead_load = calcDef.dead_load(w_sub_e, depth_of_burial);
     var deflection = calcDef.deflection(bedding_constant, time_lag_factor, dead_load, w_sub_l, w_sub_s, pipe_stiffness, E_prime);
     var total_load = calcDef.total_load(dead_load , w_sub_l);

     UICtrl.display_result(depth_of_burial, deflection , dead_load , w_sub_l , total_load);
   



 






    



console.log("------------Start :: inputs--------------");

console.log('time_lag_factor :' + time_lag_factor);
console.log('w_sub_l:' + w_sub_l);
console.log('pipe_stiffness : '+ pipe_stiffness);
console.log('depth_of_burial : '+depth_of_burial);
console.log('bedding constant :' + bedding_constant);
console.log('w_sub_e : '+ w_sub_e);
console.log('w_sub_s : ' + w_sub_s);
console.log('E_prime_b : '+E_prime_b);
console.log("E_prime_n : "+ E_prime_n);
console.log('pipe_diameter : '+ pipe_diameter);
console.log("trench_width : "+ trench_width);



console.log("------------Ends :: inputs--------------");


console.log("------------Start :: calculation--------------");


console.log("formula : bedding_constant * (time_lag_factor * dead_load + w_sub_l + w_sub_s ) / (0.149 * pipe_stiffness + 0.061 * E_prime)");



console.log('eb_by_en : ' + eb_by_en);
console.log('B_by_d : ' + B_by_d);
console.log('del_f : '+ del_f);
console.log('S_sub_c : ' + S_sub_c);
console.log('E_prime  : '+ E_prime );
console.log("dead_load : "+ dead_load);
console.log("total_load : "+ total_load);



console.log('deflection : '+ deflection);


console.log("------------End :: calculation--------------");





  


        
   

  }















})(UIController , calculateDeflection);



