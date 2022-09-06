const htmlContainer = document.querySelector(".books");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const queryId = params.get("author");

const apiKey = "L6FHpBNZeY5eGuDmGZJc3fnWINLlJraB";

const url = `https://api.nytimes.com/svc/books/v3/reviews.json?author=${queryId}&api-key=`+ apiKey;

async function getData () {

    htmlContainer.classList.add("loader");

    try {

    const response = await fetch(url);
    const json = await response.json();
    const books = json.results;

        for (let i = 0; i < books.length; i++) {

            console.log(books);

            htmlContainer.innerHTML += `<li><a href="${books[i].url}">${books[i].book_title}</a></li>`;  

        }      

        if (!htmlContainer.innerHTML) {
 
            htmlContainer.innerHTML += `<div class="error">
            There are no book reviews for this author
            </div>`;

        }

    }

    catch (error) {

        htmlContainer.innerHTML += `<div class="error">
                                    There are no book reviews for this author
                                    </div>`;
    }

}

getData();