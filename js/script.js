const htmlContainer = document.querySelector(".container");

const apiKey = "dc408f53f9cadd6cd671679df3405adf";

const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

async function getData () {

    htmlContainer.classList.add("loader");

    try {

    const response = await fetch(url);
    const json = await response.json();

    htmlContainer.innerHTML= "";

    console.log(json.results);

        for (i = 0; i < books.length; i++) {

            let bookTitle = books[i].title;
            let bookIsbn = books[i].primary_isbn13;
            let publisher = books[i].publisher;
            let description = books[i].description;
            let author = books[i].author;
            let image = books [i].book_image;
            //add plus as space for the link so you ca get more from the author on details.html
            let space = / /g;
            let authorWithPlus = author.replace(space, "+");


            htmlContainer.innerHTML += `<div class="bookContainer">
                                        <div>
                                        <h2>${bookTitle}</h2>
                                        <img src="${image}" style="width:100%;" alt="${bookTitle}">
                                        </div>
                                        <div>
                                        <a href = "details.html?author=${authorWithPlus}">Search for reviews</a>
                                        <p><strong>Published by:</strong> ${publisher}</p>
                                        <p><strong>Author:</strong> ${author}</p>
                                        <p>${description}</p>
                                        </div>
                                        </div>`;
        
        }

    }

    catch (error) {

        htmlContainer.innerHTML += `<div class="error">
                                    An error occured
                                    </div>`;
    }

}

getData();