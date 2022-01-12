
    var countryArray = [];
    const api_url = "https://restcountries.com/v3.1/all";

    const getCountry = async () => {

        // Making an API call (request) and getting the response back
        const response = await fetch(api_url);

        // Parsing it to JSON format
        const data = await response.json();

        //Converting JSON to Array
        const conv2Array = () => {
            data.forEach((element) => {
                var temp = element.name.common
                countryArray.push(temp)
            });
            countryArray.sort()
        }
        
        conv2Array();
    countryArray.forEach(myFunction);
    }

    getCountry();

    // Printing country Name on Index.html
    const myFunction = (element,index) => {
        
        if (index < 83) {
            document.getElementById('col1').innerHTML += "<span style='cursor: pointer;' id='span"+index+"' onclick='myFunc(this.id)'>"+ element+"</span><br>";
            
        }
        else if (index < 166) {
            document.getElementById('col2').innerHTML += "<span style='cursor: pointer;' id='span"+index+"' onclick='myFunc(this.id)'>"+ element+"</span><br>";
        } else {
            document.getElementById('col3').innerHTML += "<span style='cursor: pointer;' id='span"+index+"' onclick='myFunc(this.id)'>"+ element+"</span><br>";
        }
        
    }
    
        const myFunc = (clickedid)=>{
        var countryValue = document.getElementById(clickedid).innerHTML;
        document.getElementById("myInput").value = countryValue;
    }