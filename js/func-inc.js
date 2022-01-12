
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
            document.getElementById('col1').innerHTML += "<span style='cursor: pointer;' id='span"+index+"' onclick='myFunc(this.id)'>"+ element+"</span><br>";
            //console.log(element);
        }
        else if (index < 166) {
            document.getElementById('col2').innerHTML += "<span style='cursor: pointer;' id='span"+index+"' onclick='myFunc(this.id)'>"+ element+"</span><br>";
        } else {
            document.getElementById('col3').innerHTML += "<span style='cursor: pointer;' id='span"+index+"' onclick='myFunc(this.id)'>"+ element+"</span><br>";
        }
        
    }
    
    try{
        
        var btnClick = document.getElementsByClassName("span0");
        btnClick.addEventListener("click",myFunc);

   
    }
    catch(e)
    {}
    const myFunc = (clickedid)=>{
        var county = document.getElementById(clickedid).innerHTML;
        document.getElementById("myInput").value = county;
        console.log('fired')
    }
    const myclick = (id)=>{
        console.log(id)
    }