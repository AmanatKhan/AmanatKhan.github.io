function calculate(){
    
    function validation(){
        let a = document.getElementById('years').value;
        let b = document.getElementById('months').value;
        parseInt(a);
        parseInt(b);

        if (a<0){
            alert("Years field cannot take in a negative value");
        } else if (a==0){
            alert("Years field cannot be equal to 0")
        } else if (b<0){
            alert("Months field cannot take a negative value");
        } else if (b>=12){
            alert("Months field cannot take a value greater than or equal to 12");
        } else if ((document.getElementById('months').value.length == 0)) {
            alert("Months field cannot be empty. Enter 0 if you are not sure.")
        } else {
            return true;
        }
    }

    function ConverttoMonths(){
        let years = document.getElementById('years').value;
        let givenYears = parseInt(years);
        let resultYears = givenYears * 12;
        let months = document.getElementById('months').value;
        let resultMonths = parseInt(months);
        let sumMonths = resultYears + resultMonths; 
        console.log(sumMonths);
        document.getElementById("ToMonths").innerHTML = 
        "You are " + sumMonths + " months old"
        }

        function ConverttoDays(){
        let years = document.getElementById('years').value;
        let givenYears = parseInt(years);
        let resultDays = givenYears * 365;
        let months = document.getElementById('months').value;
        let givenMonths = parseInt(months);
        let resultMonths = givenMonths * 30;
        let sumDays = resultDays + resultMonths;
        console.log(sumDays);
        document.getElementById("ToDays").innerHTML = 
        "You are " + sumDays + " days old"
        }
                        
        function ConverttoHours(){
        let years = document.getElementById('years').value;
        let givenYears = parseInt(years);
        let resultHours = givenYears * 365 * 24;
        let months = document.getElementById('months').value;
        let givenMonths = parseInt(months);
        let resultHours2 = givenMonths * 30 * 24;
        let sumHours = resultHours + resultHours2;
        console.log(sumHours);
        document.getElementById("ToHours").innerHTML = 
        "You are " + sumHours + " hours old"
        }

        function ConverttoMinutes(){
        let years = document.getElementById('years').value;
        let givenYears = parseInt(years);
        let resultMinutes = givenYears * 365 * 24 * 60;
        let months = document.getElementById('months').value;
        let givenMonths = parseInt(months);
        let resultMinutes2 = givenMonths * 30 * 24 * 60;
        let sumMinutes = resultMinutes + resultMinutes2;
        console.log(sumMinutes);
        document.getElementById("ToMinutes").innerHTML = 
        "You are " + sumMinutes + " minutes old"
        }

        function ConverttoSeconds(){
        let years = document.getElementById('years').value;
        let givenYears = parseInt(years);
        let resultSeconds = givenYears * 365 * 24 * 60 * 60;
        let months = document.getElementById('months').value;
        let givenMonths = parseInt(months);
        let resultSeconds2 = givenMonths * 30 * 24 * 60 * 60;
        let sumSeconds = resultSeconds + resultSeconds2;
        console.log(sumSeconds);
        document.getElementById("ToSeconds").innerHTML = 
        "You are " + sumSeconds + " seconds old"
        }

        if (validation()){
            ConverttoMonths();
            ConverttoDays();
            ConverttoHours();
            ConverttoMinutes();
            ConverttoSeconds();    
        }
                      
}
