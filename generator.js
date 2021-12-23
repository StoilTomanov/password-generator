function passwordGenerator() {
    /* ASCII
        A-Z aplhabet = 65 - 90 incl.
        a-z aplhabet = 97 - 122 incl.
        0-9 = 48 - 57 incl.
        *)/#%@}[`>&_.... = 33 - 47 incl. && 58 - 64 incl. && 91 - 96 incl. && 123 - 126 incl.
    */

    // 15 characters long


    function generateRandomNumbers() {
        let randomArray = [];
        while (randomArray.length < 15) {
            let random = Math.floor(Math.random() * 127);
            if (random < 33) {
                continue;
            } else {
                randomArray.push(random);
            }
        }
        return randomArray;
    }


    function passBeforeValidation() {

        let isValid = false;
        let randomPass = [];
        let randomArrayToCheck = generateRandomNumbers();

        while (!isValid) {
            for (let num of randomArrayToCheck) {

                if (num >= 65 && num <= 90) {
                    let currentChar = String.fromCharCode(num);
                    randomPass.push(currentChar);

                } else if (num >= 97 && num <= 122) {
                    let currentChar = String.fromCharCode(num);
                    randomPass.push(currentChar);

                } else if (num >= 48 && num <= 57) {
                    let currentChar = String.fromCharCode(num);
                    randomPass.push(currentChar);

                } else if (num >= 33 && num <= 47) {
                    let currentChar = String.fromCharCode(num);
                    randomPass.push(currentChar);

                } else if (num >= 58 && num <= 64) {
                    if (num === 60) {
                        num = 45;
                    }
                    let currentChar = String.fromCharCode(num);
                    randomPass.push(currentChar);

                } else if (num >= 91 && num <= 96) {
                    let currentChar = String.fromCharCode(num);
                    randomPass.push(currentChar);

                } else if (num >= 123 && num <= 126) {
                    let currentChar = String.fromCharCode(num);
                    randomPass.push(currentChar);

                }

            }

            if (randomPass.length === 15) {
                isValid = true;
                return randomPass.join('');
            }
        }
    }

    function passwordValidation() {

        let pattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]).{15}/g;

        let passToBeChecked = passBeforeValidation();

        while (true) {
            if (passToBeChecked.match(pattern)) {
                let match = pattern.exec(passToBeChecked);
                let pass = match[0];
                return pass;
            } else {
                passToBeChecked = passBeforeValidation();
            }

        }

    }

    let password = passwordValidation();

    document.getElementById('outputResult').innerHTML = password;

    document.getElementById('copy').clicked = function clicked() {
        navigator.clipboard.writeText(password);
        document.getElementById('copy').innerHTML = 'Copied';
    }

    if (document.getElementById('copy').innerHTML == 'Copied') {
        document.getElementById('copy').innerHTML = 'Copy';
    }

}
passwordGenerator();