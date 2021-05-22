$(document).ready(function() {
    $("#feedback-form").submit(function(event) {
        var is_error = false;
        var is_email_error = false;
        var is_fullname_error = false;
        var error_count = 0;

        var fullname = $("#name-field").val();
        if (fullname == ""){
            is_error = true;
            is_fullname_error = true;
            error_count += 1;
        }
        var email = $("#email-field").val();
        if (email == "") {
            is_error = true;
            is_email_error = true;
            error_count += 1;
        }

        if (is_error) {
            $("span.error-count").text(error_count);
            $("p.error-list").css("display", "block");
            event.preventDefault();
        }

        if(is_fullname_error) {
            $(".name-error-msg").css("visibility", "visible");
            $(".name-error-msg").css("display", "block");
            $(".name-error-msg").css("background-color", "white");
            $(".name-error-msg").css("color", "red");
            $(".name-error-msg").css("border-top", "1px solid #e4644e");
        }
        
        if(is_email_error) {
            $(".email-error-msg").css("visibility", "visible");
            $(".email-error-msg").css("display", "block");
            $(".email-error-msg").css("background-color", "white");
            $(".email-error-msg").css("color", "red");
            $(".email-error-msg").css("border-top", "1px solid #e4644e");
        }
        
        //hide error message and decrement counter
        $("#name-field").click(function(){
            $(".name-error-msg").css("visibility", "hidden");
            error_count -= 1;
            $("span.error-count").text(error_count);
            $("p.error-list").css("display", "block");
        });
    
        $("#email-field").click(function(){
            $(".email-error-msg").css("visibility", "hidden");
            error_count -= 1;
            $("span.error-count").text(error_count);
            $("p.error-list").css("display", "block");
        });
    });

    $(".corporate-wedding-form").submit(function(event) {
        var is_error = false;
        var is_email_error = false;
        var is_fullname_error = false;
        var is_phone_error = false;
        var error_count = 0;

        var fullname = $(".form-name").val();
        if (fullname == ""){
            is_error = true;
            is_fullname_error = true;
            error_count += 1;
        }
        var email = $(".form-email").val();
        if (email == "") {
            is_error = true;
            is_email_error = true;
            error_count += 1;
        }

        var phone = $(".phone-nr").val();
        if (phone == "") {
            is_error = true;
            is_phone_error = true;
            error_count += 1;
        }

        if (is_error) {
            $("span.error-count").text(error_count);
            $("p.error-list").css("display", "block");
            event.preventDefault();
        }

        if(is_fullname_error) {
            $(".name-error-msg").css("visibility", "visible");
            $(".name-error-msg").css("display", "block");
            $(".name-error-msg").css("background-color", "white");
            $(".name-error-msg").css("color", "red");
            $(".name-error-msg").css("border-top", "1px solid #e4644e");
        }
        
        if(is_email_error) {
            $(".email-error-msg").css("visibility", "visible");
            $(".email-error-msg").css("display", "block");
            $(".email-error-msg").css("background-color", "white");
            $(".email-error-msg").css("color", "red");
            $(".email-error-msg").css("border-top", "1px solid #e4644e");
        }
        
        if (is_phone_error) {
            $(".phone-error-msg").css("visibility", "visible");
            $(".phone-error-msg").css("display", "block");
            $(".phone-error-msg").css("background-color", "white");
            $(".phone-error-msg").css("color", "red");
            $(".phone-error-msg").css("border-top", "1px solid #e4644e");
        }

        $(".form-name").click(function(){
            $(".name-error-msg").css("visibility", "hidden");
            error_count -= 1;
            $("span.error-count").text(error_count);
            $("p.error-list").css("display", "block");
        });
    
        $(".form-email").click(function(){
            $(".email-error-msg").css("visibility", "hidden");
            error_count -= 1;
            $("span.error-count").text(error_count);
            $("p.error-list").css("display", "block");
        });

        $(".phone-nr").click(function(){
            $(".email-error-msg").css("visibility", "hidden");
            error_count -= 1;
            $("span.error-count").text(error_count);
            $("p.error-list").css("display", "block");
        });
    });
});
