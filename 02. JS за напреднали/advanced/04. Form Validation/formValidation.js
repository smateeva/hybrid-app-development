function validate() {
     $('#company').on('change', showHideCompany);

    $('#submit').on('click', function(ev) {
        ev.preventDefault();
        
        let usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
        let passwordRegex = /^\w{5,15}$/;
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let companyNumberRegex = /^[1-9]{1}[0-9]{3}$/;

        let username = $('#username').val();
        let password = $('#password').val();
        let confirmPassword = $('#confirm-password').val();
        let email = $('#email').val();
        let companyNumber = $('#companyNumber').val();

        if (!usernameRegex.test(username)) {
            alert("Невалидно потребителско име. Потребителското име трябва да съдържа от 3 до 20 букви и/или цифри.");
            return;
        }

        if (!passwordRegex.test(password)) {
            alert("Невалидна парола. Паролата трябва да съдържа от 5 до 15 символа.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Паролите не съвпадат.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Невалиден email адрес.");
            return;
        }

        if ($('#company').is(':checked') && !companyNumberRegex.test(companyNumber)) {
            alert("Невалиден фирмен номер. Фирменият номер трябва да съдържа 4 цифри и да не започва с 0.");
            return;
        }

        alert("Формата е валидна и готова за изпращане.");
    });

    function showHideCompany() {
        if ($(this).is(':checked')) {
            $('#companyInfo').css('display', 'block');
        } else {
            $('#companyInfo').css('display', 'none')
        }
    }
}
