// Go REGISTER | LOGIN PAGE
$("#go-register").on('click', function() {
    $("#login").hide();
    $("#register").show();
})

$("#go-login").on('click', function() {
    $("#register").hide();
    $("#login").show();
})

$(".btn-login").on('click', function() {
    $("#login").hide();
    $("#game").show();
})

$(".link-signout").on('click', function() {
    $("#game").hide();
    $("#login").show();
})

// BUTTON JOIN | BUTTON CREATE
$(".btn-join").on('click', function() {
    $(".btn-join").hide();
    $(".inpt-join").show();
    $(".btn-join-show").show();
})

$(".btn-create").on('click', function() {
    $(".btn-create").hide();
    $(".inpt-create").show();
    $(".btn-create-show").show();
})