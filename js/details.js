const seriesId = 10;

const htmlContainer = document.querySelector(".showDetails");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const queryId = params.get("id");

const url = `https://api.tvmaze.com/shows/1/episodes`;

async function getDetails () {

    htmlContainer.classList.add("loader");

    try {

    const response = await fetch(url);
    const results = await response.json();

    htmlContainer.innerHTML= "";

    console.log(results[i]);

            htmlContainer.innerHTML += results[i];


    }

    catch (error) {

        htmlContainer.innerHTML += `<div class="error">
                                    An error occured
                                    </div>`;
    }

}

getDetails();