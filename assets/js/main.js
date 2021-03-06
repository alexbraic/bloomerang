$(document).ready(function() {
    $("#feedback-form").submit(function(event) {
        var is_error = false;
        var is_email_error = false;
        var is_fullname_error = false;
        var error_count = 0;
        var no_radio = false;
        var none_checked = false;

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

        if($("input[type=radio]:checked").length == 0) {
            is_error = true;
            no_radio = true;
            error_count += 1;
        }

        if($("input[type=checkbox]:checked").length == 0) {
            is_error = true;
            none_checked = true;
            error_count += 1;   
        }
        //prevent submission on is_error == true and give thank you message on successful submission
        if (is_error) {
            $("span.error-count").text(error_count);
            $("p.error-list").css("display", "block");
            event.preventDefault();
        } else {
            alert("Your feedback is appreciated, thank you!");
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

        if(no_radio) {
            $(".radio-error-msg").css("visibility", "visible");
            $(".radio-error-msg").css("display", "block");
            $(".radio-error-msg").css("background-color", "white");
            $(".radio-error-msg").css("color", "red");
            $(".radio-error-msg").css("border-top", "1px solid #e4644e");
        }

        if (none_checked) {
            $(".checkbox-error-msg").css("visibility", "visible");
            $(".ckeckbox-error-msg").css("display", "block");
            $(".checkbox-error-msg").css("background-color", "white");
            $(".ckeckbox-error-msg").css("color", "red");
            $(".ckeckbox-error-msg").css("border-top", "1px solid #e4644e");
        }
        //hide error message and decrement counter when clicking inside input area.
        //does not display error message once counter reaches 0
        $("#name-field").click(function(){
            $(".name-error-msg").css("visibility", "hidden");
            error_count -= 1;
            $("span.error-count").text(error_count);
            $("p.error-list").css("display", "block");
            if (error_count <= 0) {
                $("p.error-list").css("display", "none");
            }
        });
    
        $("#email-field").click(function(){
            $(".email-error-msg").css("visibility", "hidden");
            error_count -= 1;
            $("span.error-count").text(error_count);
            $("p.error-list").css("display", "block");
            if (error_count <= 0) {
                $("p.error-list").css("display", "none");
            }
        });

        $("#feedback-form").click(function() {
            $(".radio-error-msg").css("visibility", "hidden");
            error_count -= 1;
        });

        $("#feedback-form").click(function() {
            $(".checkbox-error-msg").css("visibility", "hidden");
            error_count -= 1;
        });
    });

    // wedding and corporate pages form
    $(".corporate-wedding-form").submit(function(event) {
        var is_error = false;
        var is_email_error = false;
        var is_fullname_error = false;
        var is_phone_error = false;
        var is_details_error = false;
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
        if (phone == "" || phone == " " || phone.length != 10) {
            is_error = true;
            is_phone_error = true;
            error_count += 1;
        }

        var details = $(".detail-area").val();
        if (details == "") {
            is_error = true;
            is_details_error = true;
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
        if(is_details_error) {
            $(".details-error-msg").css("visibility", "visible");
            $(".details-error-msg").css("display", "block");
            $(".details-error-msg").css("background-color", "white");
            $(".details-error-msg").css("color", "red");
            $(".details-error-msg").css("border-top", "1px solid #e4644e");
        }
    
        //hide error message and decrement counter when clicking inside input area.
        //does not display error message once counter reaches 0
        $(".form-name").click(function(){
            $(".name-error-msg").css("visibility", "hidden");
            error_count -= 1;
            $("span.error-count").text(error_count);
            $("p.error-list").css("display", "block");
            if (error_count <= 0) {
                $("p.error-list").css("display", "none");
            }
        });
    
        $(".form-email").click(function(){
            $(".email-error-msg").css("visibility", "hidden");
            error_count -= 1;
            $("span.error-count").text(error_count);
            $("p.error-list").css("display", "block");
            if (error_count <= 0) {
                $("p.error-list").css("display", "none");
            }
        });

        $(".phone-nr").click(function(){
            $(".phone-error-msg").css("visibility", "hidden");
            error_count -= 1;
            $("span.error-count").text(error_count);
            $("p.error-list").css("display", "block");
            if (error_count <= 0) {
                $("p.error-list").css("display", "none");
            }
        });

        $(".detail-area").click(function() {
            $(".details-error-msg").css("visibility", "hidden");
            error_count -= 1;
            $("span.error-count").text(error_count);
            $("p.error-list").css("display", "block");
            if (error_count <= 0) {
                $("p.error-list").css("display", "none");
            }
        });
    });
});
