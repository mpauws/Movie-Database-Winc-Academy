const moviesRecent = movieDatabase.Movies.filter((item) => {
    return item.Year >= 2014
})

// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
// Onderstaande filters moeten nog korter kunnen

const moviesAvengers = movieDatabase.Movies.filter((item) => {
    return item.Title.includes("Avengers")
})

const moviesXmen = movieDatabase.Movies.filter((item) => {
    return item.Title.includes("X-Men")
})

const moviesPrincess = movieDatabase.Movies.filter((item) => {
    return item.Title.includes("Princess")
})

const moviesBatman = movieDatabase.Movies.filter((item) => {
    return item.Title.includes("Batman")
})

// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}


const addMoviesToDom = (whateverfilter) => {
    const htmlMovieContainer = document.getElementById("movie-html-container-id");

    // Maakt container eerst leeg
    htmlMovieContainer.innerHTML = "";

    for (let i = 0; i < whateverfilter.length; i++) {
        const newLi = document.createElement('li');
        const newImg = document.createElement('img');
        newLi.classList.add("movie-html-container-item");
        const newAElement = document.createElement('a');
        newImg.classList.add("movie-poster");
        newLi.appendChild(newAElement);
        document.getElementsByClassName("movie-poster")
        newAElement.appendChild(newImg).src;
        newAElement.href = "https://www.imdb.com/title/" + whateverfilter.imdbID;
        htmlMovieContainer.appendChild(newLi);
        newImg.src = whateverfilter[i].Poster;
    }
}

const allRadioButtons = document.getElementsByName("filter-buttons");

allRadioButtons.forEach((filterButton) => {
    filterButton.addEventListener("change", (event) => {
        // let handleOnChangeEvent = event.target.value;

        switch (event.target.value) {
            case 'recent-movies':
                addMoviesToDom(moviesRecent);
                break;
            case 'avengers-movies':
                addMoviesToDom(moviesAvengers);
                break;
            case 'xmen-movies':
                addMoviesToDom(moviesXmen);
                break;
            case 'princess-movies':
                addMoviesToDom(moviesPrincess);
                break;
            case 'batman-movies':
                addMoviesToDom(moviesBatman);;
                break;
            default:
                console.log("Ehmm...")
        }
    }
    )
}
)


