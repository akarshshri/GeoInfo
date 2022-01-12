
    var countryArray = [];
    const api_url = "https://restcountries.com/v3.1/all";

    const getCountry = async () => {

        // Making an API call (request)
        // and getting the response back
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
            //console.log(countryArray)
        }
        conv2Array();
        //var values = temp.keys(data).map(function (key) { return data[key]; });
        console.log(Object.values(data[6].languages));
       // console.log(data[1].languages)
    countryArray.forEach(myFunction);
    }

    getCountry();

    // Printing country Name on Index.html
    const myFunction = (element,index) => {
        
        if (index < 83) {
            document.getElementById('col1').innerHTML += "<br><a href='" + element;
            //console.log(element);
            }
            else if (index < 166) {
                document.getElementById('col2').innerHTML += "<br>" + element;
            } else {
                document.getElementById('col3').innerHTML += "<br>" + element;
            }
       
    }

