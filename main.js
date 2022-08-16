$(document).ready(function () {
    $.getJSON("./country.json",
       function (data) {
          $.each(data, function (key, value) {
             var cn = $('#country');
             cn.append('<option>' + value.country_name + '</option>');
          }
          );
       });
    $('#country').change((e) => {
        $.getJSON("./states.json", (states => {
            const filteredState = states.find(coun => coun.country === e.target.value)
            var cn = $('#State');
                cn.textContent = '';
            if(filteredState){
                
                $.each(filteredState.states, function (key, value) {
                   
                    cn.append('<option>' + value + '</option>');
                   
                 })
            }    
        }))
    
    })

    $('#btn_login_details').click(function () {
        var error_user_name = '';

        var error_email = '';

        var error_password = '';
        var error_confirm_password = '';
        var name = $('#user_name').val();
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if ($.trim($('#user_name').val()).length == 0) {
            error_user_name = 'User Name is required';
            $('#error_user_name').text(error_user_name);
            $('#user_name').addClass('has-error');
        }
        else if (isNaN(name[0]) == false || isNaN(name) == false) {
            error_user_name = 'not a valid Name';
            $('#error_user_name').text(error_user_name);
            $('#user_name').addClass('has-error');
        }
        else {
            error_user_name = '';
            $('#error_user_name').text(error_user_name);
            $('#user_name').removeClass('has-error');
        }



        if ($.trim($('#email').val()).length == 0) {
            error_email = 'Email is required';
            $('#error_email').text(error_email);
            $('#email').addClass('has-error');
        }
        else {
            if (!filter.test($('#email').val())) {
                error_email = 'Invalid Email';
                $('#error_email').text(error_email);
                $('#email').addClass('has-error');
            }
            else {
                error_email = '';
                $('#error_email').text(error_email);
                $('#email').removeClass('has-error');
            }
        }

        if ($.trim($('#password').val()).length == 0) {
            error_password = 'Password is required';
            $('#error_password').text(error_password);
            $('#password').addClass('has-error');
        }
        else {
            error_password = '';
            $('#error_password').text(error_password);
            $('#password').removeClass('has-error');
        }

        if ($('#confirm_password').val() != $('#password').val()) {
            error_confirm_password = 'Mismatch in Password and confirm password';
            $('#error_confirm_password').text(error_confirm_password);
            $('#confirm_password').addClass('has-error');
        }
        else {
            error_confirm_password = '';
            $('#error_confirm_password').text(error_confirm_password);
            $('#confirm_password').removeClass('has-error');
        }

     if (error_user_name != '' || error_email != '' || error_password != '' || error_confirm_password != '') {
            return false;
        }
        else {
            $('#list_login_details').removeClass('active active_tab1');
            $('#list_login_details').removeAttr('href data-toggle');
            $('#login_details').removeClass('active');
            $('#list_login_details').addClass('inactive_tab1');
            $('#list_personal_details').removeClass('inactive_tab1');
            $('#list_personal_details').addClass('active_tab1 active');
            $('#list_personal_details').attr('href', '#personal_details');
            $('#list_personal_details').attr('data-toggle', 'tab');
            $('#personal_details').addClass('active in');
        }
    
    });

    $('#previous_btn_personal_details').click(function () {
        $('#list_personal_details').removeClass('active active_tab1');
        $('#list_personal_details').removeAttr('href data-toggle');
        $('#personal_details').removeClass('active in');
        $('#list_personal_details').addClass('inactive_tab1');
        $('#list_login_details').removeClass('inactive_tab1');
        $('#list_login_details').addClass('active_tab1 active');
        $('#list_login_details').attr('href', '#login_details');
        $('#list_login_details').attr('data-toggle', 'tab');
        $('#login_details').addClass('active in');
    });

    $('#btn_personal_details').click(function () {
        var error_birthdate = '';
        var error_age = '';

        if ($.trim($('#birthdate').val()).length == 0) {
            error_birthdate = 'Please enter your birthdate';
            $('#error_birthdate').text(error_birthdate);
            $('#birthdate').addClass('has-error');
        }
        else {
            error_birthdate = '';
            ageCounter();
            function ageCounter(){
                var dob= $('#birthdate').val();
            var dob = new Date(dob);
           var today = new Date();
           var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
           $('#age').textContent = age;
        }
            $('#error_birthdate').text(error_birthdate);
            $('#birthdate').removeClass('has-error');


        }
       

       




        if ($.trim($('#age').val()).length == 0) {
            error_age = 'Age is required';
            $('#error_age').text(error_age);
            $('#age').addClass('has-error');
        }
        else {
            error_age = '';
            $('#error_age').text(error_age);
            $('#age').removeClass('has-error');
        }

        if (error_birthdate != '' || error_age != '') {
            return false;
        }
        else {
            $('#list_personal_details').removeClass('active active_tab1');
            $('#list_personal_details').removeAttr('href data-toggle');
            $('#personal_details').removeClass('active');
            $('#list_personal_details').addClass('inactive_tab1');
            $('#list_contact_details').removeClass('inactive_tab1');
            $('#list_contact_details').addClass('active_tab1 active');
            $('#list_contact_details').attr('href', '#contact_details');
            $('#list_contact_details').attr('data-toggle', 'tab');
            $('#contact_details').addClass('active in');
        }
    });

    $('#previous_btn_contact_details').click(function () {
        $('#list_contact_details').removeClass('active active_tab1');
        $('#list_contact_details').removeAttr('href data-toggle');
        $('#contact_details').removeClass('active in');
        $('#list_contact_details').addClass('inactive_tab1');
        $('#list_personal_details').removeClass('inactive_tab1');
        $('#list_personal_details').addClass('active_tab1 active');
        $('#list_personal_details').attr('href', '#personal_details');
        $('#list_personal_details').attr('data-toggle', 'tab');
        $('#personal_details').addClass('active in');
    });

    $('#btn_contact_details').click(function () {
        var error_address = '';
        var error_country = '';
        //  var mobile_validation = /^\d{10}$/;
        if ($.trim($('#address').val()).length == 0) {
            error_address = 'Address is required';
            $('#error_address').text(error_address);
            $('#address').addClass('has-error');
        }
        else {
            error_address = '';
            $('#error_address').text(error_address);
            $('#address').removeClass('has-error');
        }
   
        $.getJSON("http://127.0.0.1:5500/countries.json",
        function (data) {
           $.each(data, function (key, value) {
              var cn = $('#country');
              cn.append('<option>' + value.country_name + '</option>');
           }
           );
        });

       
        if (error_address != '') {
            return false;
        }
        else {
            $('#btn_contact_details').attr("disabled", "disabled");
            $(document).css('cursor', 'prgress');
            $("#register_form").submit();
        }

    });
});
