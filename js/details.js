const htmlContainer = document.querySelector(".detailsContainer");

const title = document.querySelector("title");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const queryId = params.get("id");

const apiKey = "dc408f53f9cadd6cd671679df3405adf";

const url = `https://api.themoviedb.org/3/movie/${queryId}?api_key=${apiKey}&language=en-US&page=1`;

async function getDetails () {

    htmlContainer.innerHTML = `<div class="loader">Loading...</div>`;

    try {

    const response = await fetch(url);
    const json = await response.json();
    const movies = json;

    console.log(movies);

    renderMovie(movies);

    }

    catch (error) {

        htmlContainer.innerHTML= "";

        htmlContainer.innerHTML += `<div class="error">
                                    An error occured
                                    </div>`;
    }

}

getDetails();

function renderMovie(movies) {

    htmlContainer.innerHTML= "";

    let movieTitle = movies.title;
    let releasedate = movies.release_date;
    let summary = movies.overview;
    let homePage = movies.homepage;
    let rating = movies.vote_average;
    let tagline = movies.tagline;

    title.innerHTML = movieTitle;    

    htmlContainer.innerHTML = `<div class="movieDetails">                            
                            <h2>${movieTitle}</h2>
                            <p style="font-style:italic;">-${tagline}</p>
                            <div>Rating: ${rating}</div>
                            <p>
                            <a href="${homePage}">${homePage}</a>
                            <p><strong>Release date:</strong> ${releasedate}</p>
                            </p>
                            <p>${summary}</p>
                            </div>`;

}