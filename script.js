async function getMatchData(){
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=d51eaf7f-27e4-43d3-be68-2873ab03707d&offset=0")
        .then(data => data.json())
        .then(data => {
            if(data.status != "success")      //if unsuccessful then return
                return;

            const matchesList = data.data;    //fetch list of matches

            if(!matchesList)                  //if list is empty then return empty arr
                return [];

            const relevantData = matchesList.map(match => `${match.name}, ${match.status}`);

            console.log({relevantData});

            document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match}</li>`).join('');
        
            return relevantData;
        })
        .catch(e => console.log(e));
}

getMatchData();