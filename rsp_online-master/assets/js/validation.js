// Validation Register
$(".inpt-reg-email").keyup(function() {
    if (validateEmail()) {
        $('.inpt-reg-email').css("border", "1px solid green");
        $('#reg-email-msg').remove();
        $('.inpt-reg-email').removeClass("mb-2");
    } else {
        $('.inpt-reg-email').css("border", "1px solid red");
        $('.inpt-reg-email').addClass("mb-2");
        $('.reg-mail-div').append(`<span id="reg-email-msg"></span>`)
        $('#reg-email-msg').html("<p class='text-danger'>Un-Validated email!</p>")
    }
})

$(".inpt-reg-username").keyup(function() {
    if (validateUsername()) {
        $('.inpt-reg-username').css("border", "1px solid green");
        $('#reg-username-msg').remove();
        $('.inpt-reg-username').removeClass("mb-2");
    } else {
        $('.inpt-reg-username').css("border", "1px solid red");
        $('.inpt-reg-username').addClass("mb-2");
        $('.reg-username-div').append(`<span id="reg-username-msg"></span>`)
        $('#reg-username-msg').html(`<p class='text-danger'>Username length must be bigger than 3 and don't use symbols!</p>`)
    }
})
$(".inpt-reg-password1").keyup(function() {
    if (validatePassword1()) {
        $('.inpt-reg-password1').css("border", "1px solid green");
        $('#reg-password-msg').remove();
        $('.inpt-reg-password1').removeClass("mb-2");
    } else {
        $('.inpt-reg-password1').css("border", "1px solid red");
        $('.inpt-reg-password1').addClass("mb-2");
        $('.reg-password-div').append(`<span id="reg-password-msg"></span>`)
        $('#reg-password-msg').html("<p class='text-danger'>Password length must be 6 or bigger!</p>")
    }
})

function validateEmail() {
    var email = $(".inpt-reg-email").val();
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (reg.test(email)) {
        return true;
    } else {
        return false;
    }
}

function validateUsername() {
    var username = $(".inpt-reg-username").val().trim();
    var reg = /([+.#:;'{}<>,@/`$?"%^()! ])/
    if (reg.test(username) || username.length < 3 || username.length > 16) {
        return false;
    } else {
        return true;
    }
}

function validatePassword1() {
    var password = $(".inpt-reg-password1").val();
    if (password.length > 5) {
        return true;
    } else {
        return false;
    }
}