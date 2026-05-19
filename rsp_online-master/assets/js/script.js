$('.btn-register').on('click', function() {
    registerUser();
})

function registerUser() {
    if (validateEmail() && validateUsername() && validatePassword1()) {
        createNewUser();
        clearRegister();
        alert("Registration Successful!")

    } else {
        $('.inpt-reg-password1').addClass("mb-2");
        $('.reg-password-div').append(`<span id="reg-password-msg"></span>`)
        $('#reg-password-msg').html("<p class='text-danger'>Please fill the cases!</p>")
    }
}

function clearRegister() {
    $('.inpt-reg-email').val("");
    $('.inpt-reg-email').css("border", "1px solid #ced4da");
    $('.inpt-reg-username').val("");
    $('.inpt-reg-username').css("border", "1px solid #ced4da");
    $('.inpt-reg-password1').val("");
    $('.inpt-reg-password1').css("border", "1px solid #ced4da");
}

function createNewUser() {
    var newUser = database.ref('users').push();
    var userId = newUser.key;
    var email = $('.inpt-reg-email').val();
    var userName = $('.inpt-reg-username').val();
    var password = $('.inpt-reg-password1').val();
    var data = {
        email: email,
        username: userName,
        password: password,
        key: userId
    }
    newUser.set(data);
    window.localStorage.setItem('userId', userId);
    window.localStorage.setItem('userName', userName);
    window.localStorage.setItem('email', email);
}