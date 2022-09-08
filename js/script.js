const htmlContainer = document.querySelector(".container");

const apiKey = "dc408f53f9cadd6cd671679df3405adf";

const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

async function getData () {

    htmlContainer.innerHTML = `<div class="loader">Loading...</div>`;

    try {

    const response = await fetch(url);
    const json = await response.json();
    const movies = json.results;

    console.log(movies);

    renderMovie(movies)
        
    }

    catch (error) {

        htmlContainer.innerHTML += `<div class="error">
                                    An error occured
                                    </div>`;
    }
}

getData();

function renderMovie(movies) {

    htmlContainer.innerHTML= "";

    for (i = 0; i < movies.length; i++) {

        let movieTitle = movies[i].title;
        let releasedate = movies[i].release_date;
        let summary = movies[i].overview;
        let movieId = movies[i].id;
        let rating = movies[i].vote_average;

        htmlContainer.innerHTML += `<div class="movieContainer">                            
                                    <h2>${movieTitle}</h2>
                                    <div>Rating: ${rating}</div>
                                    <p>
                                    <a href = "details.html?id=${movieId}">More details</a>
                                    <p><strong>Release date:</strong> ${releasedate}</p>
                                    </p>
                                    <p>${summary}</p>
                                    </div>`;
    }

}