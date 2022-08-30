

const htmlContainer = document.querySelector(".container");

//API
const seriesId = 10;
const url = `https://api.tvmaze.com/seasons/${seriesId}/episodes`;

async function getData () {

    htmlContainer.classList.add("loader");

    try {

    const response = await fetch(url);
    const results = await response.json();

    console.log(results);

        for (i = 0; i < results.length; i++) {

            let showAirDate = results[i].airdate;
            let showTitle = results[i].name;
            let showAirTime = results[i].airtime;
            let showRating = results[i].rating.average;
            let showSummary = results[i].summary;



            htmlContainer.innerHTML += `<div class="seriesContainer">
                            <h2>${showTitle}</h2>
                            <p>Release date: ${showAirDate}</p>
                            <p>Air time: ${showAirTime}</p>
                            <p>Rating: ${showRating}</p>
                            <p>Rating: ${showSummary}</p>
                            </div>`;

            if (i === 2) {

                break;

            }
        
        }

    }

    catch (error) {

        htmlContainer.innerHTML += `<div class="error">
            An error has occured. Try again or contact us for assistance
        </div>`;
    }

}

getData();