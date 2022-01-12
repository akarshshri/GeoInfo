var query; 

const search = ()=>{
    query = document.getElementById('myInput').value;
    var getInput = document.getElementById('myInput').value;
    localStorage.setItem("storageName",getInput);
    window.location.href = './country.html';
} 

try{
    var btnClick = document.getElementById("btnSearch");
    btnClick.addEventListener("click",search);
}
catch(e)
{}
