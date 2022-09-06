const htmlContainer = document.querySelector(".container");

const apiKey = "L6FHpBNZeY5eGuDmGZJc3fnWINLlJraB";

const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=`+ apiKey;

async function getData () {

    htmlContainer.classList.add("loader");

    try {

    const response = await fetch(url);
    const json = await response.json();
    const books = json.results.books;

    htmlContainer.innerHTML= "";

    console.log(books);

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
                                        <a href = "details.html?author=${authorWithPlus}">More info</a>
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