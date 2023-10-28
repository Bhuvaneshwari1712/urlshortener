function shortenURL(){
    const url = document.getElementById("url").value;
    
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(url)}`));
    
    if (response.ok){
        const data = await response.text();
        document.getElementById('result').innerHTML = 'shortened URL: <a href="$(data)" target="_blank">{data}</a>';

    }
    
    else{
        document.getElementById('result').innerHTML = "Error shortening URL";

    }
}
