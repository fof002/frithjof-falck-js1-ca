import { seriesId } from './seriesid.js';

const htmlContainer = document.querySelector(".showDetails");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = `https://api.tvmaze.com/seasons/${seriesId}/episodes`;

async function getDetails () {

    htmlContainer.classList.add("loader");

    try {

    const response = await fetch(url);
    const results = await response.json();

    htmlContainer.innerHTML= "";

    console.log(results);

        for (i = 0; i < results.length; i++) {

            let showAirDate = results[i].airdate;
            let showTitle = results[i].name;
            let showAirTime = results[i].airtime;
            let showRating = results[i].rating.average;
            let showSummary = results[i].summary;
            let showId = results[i].id

            //Create the HTML

            htmlContainer.innerHTML += `<div class="seriesContainer">
                                        <h2>${showTitle}</h2>
                                        <a href="details.html?id=${showId}">More info</a>
                                        <p><strong>Release date:</strong> ${showAirDate}</p>
                                        <p><strong>Air time:</strong> ${showAirTime}</p>
                                        <p><strong>Rating:</strong> ${showRating}</p>
                                        <p>${showSummary}</p>
                                        </div>`;

            if (i === 5) {

                break;

            }
        
        }

    }

    catch (error) {

        htmlContainer.innerHTML += `<div class="error">
                                    An error occured
                                    </div>`;
    }

}

getData();