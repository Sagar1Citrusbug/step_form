$(document).ready(function () {
    $("#register_form").submit(e => {
        e.preventDefault()
        console.log("+++++++++++++++++++", e.target.user_name.value)

        const container = $(".container")
        container.empty()

        const ul = document.createElement("ui")
        const user_name = document.createElement("li")
        user_name.textContent = `username : ${e.target.user_name.value}`

        const email = document.createElement("li")
        email.textContent = `email : ${e.target.email.value}`

        const birthdate = document.createElement("li")
        birthdate.textContent = `birthdate : ${e.target.birthdate.value}`

        const age = document.createElement("li")
        age.textContent = `age : ${e.target.age.value}`

        const address = document.createElement("li")
        address.textContent = `address : ${e.target.address.value}`

        const country = document.createElement("li")
        country.textContent = `country : ${e.target.country.value}`

        const State = document.createElement("li")
        State.textContent = `state : ${e.target.State.value}`

        ul.appendChild(user_name)
        ul.appendChild(email)
        ul.appendChild(birthdate)
        ul.appendChild(age)
        ul.appendChild(address)
        ul.appendChild(country)
        ul.appendChild(State)

        container.append(ul)
    })
    $('#country').change((e) => {
        $.getJSON("./states.json", (states => {
            const filteredState = states.find(coun => coun.country === e.target.value)
            if (filteredState) {
                var cn = $('#State');
                cn.empty()
                $.each(filteredState.states, function (key, value) {
                    cn.append('<option>' + value + '</option>');
                })
            }
        }))
    })

    $('#birthdate').change(e => {

        const bd = new Date(e.target.value)
        const today = new Date()
        var age = Math.floor((today - bd) / (365.25 * 24 * 60 * 60 * 1000));
        // console.log(age)

        const ageIn = $("#age")
        // console.log(ageIn)

        $("#age")[0].value = age
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
        }else if($.trim($('#password').val()).length < 6){
            error_password = 'Password is short';
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
            // ageCounter();
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

        $.getJSON("./country.json",
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
    });
});
