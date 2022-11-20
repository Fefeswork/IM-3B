



//API FETCH
async function getdata()
var api_url = "https://www.freetogame.com/api/games?category=shooter";
var api_data= await fetch(api_url);
var api_json= await api_data.json();
var data= api_json.slice(0,8);
console.log(data);



getdata();