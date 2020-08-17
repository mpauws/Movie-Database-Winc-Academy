// {{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}
// {{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}
// SVG EXPERIMENT
// {{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}
// {{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}

const svgStarIcon =
   '<svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" class="star-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>';

const allMovies = movieDatabase.Movies;

const moviesRecent = movieDatabase.Movies.filter((item) => {
   return item.Year >= 2014;
});

const movieFilter = (filterCategory) => {
   const movieTitlesWithWord = movieDatabase.Movies.filter((movie) => {
      return movie.Title.includes(filterCategory);
   }).map((movies) => {
      return movies;
   });
   addMoviesToDom(movieTitlesWithWord, filterCategory);
};

const addMoviesToDom = (whateverfilter, titleDisplay) => {
   const htmlMovieContainer = document.getElementById("movie-html-container-id");
   htmlMovieContainer.innerHTML = "";

   document.querySelector(".subtitle").innerHTML = titleDisplay;

   whateverfilter.forEach((element) => {
      // Create new list item element
      const newLi = document.createElement("li");

      // Create new img element
      const newImg = document.createElement("img");

      // Create new a element
      const newAElement = document.createElement("a");

      // Create new a element
      const newTitleAElement = document.createElement("a");

      // Create new h4 element
      const newH4Element = document.createElement("h4");

      // Create new div element
      const newRatingDiv = document.createElement("div");

      // Add class to list item element
      newLi.classList.add("movie-html-container-item");

      // Add class to img element
      newImg.classList.add("movie-poster");

      // Add new a element to new list item
      newLi.appendChild(newAElement).target;

      // Create src attribute in new img element
      newAElement.appendChild(newImg).src;

      // Set href attribute to movieposter jpg location
      newAElement.href = "https://www.imdb.com/title/" + element.imdbID;

      // Add new list item element to the html movie container
      htmlMovieContainer.appendChild(newLi);

      // Set src attribute of new img to the poster jpg path
      newImg.src = element.Poster;

      // Set target attribute of new img to "_blank"
      newAElement.target = '"_blank"';

      // Set h4 value to element title
      newH4Element.innerHTML = `${element.Title} (${element.Year})`;

      newRatingDiv.innerHTML = `${svgStarIcon} ${(Math.random() * 4 + 6).toFixed(1)}`;

      // Add h4 to new a element
      newTitleAElement.appendChild(newH4Element);

      newTitleAElement.appendChild(newRatingDiv);

      // Add new a element to list element
      newLi.appendChild(newTitleAElement);
   });
};

const allRadioButtons = document.getElementsByName("filter-buttons");

allRadioButtons.forEach((filterButton) => {
   filterButton.addEventListener("change", (event) => {
      switch (event.target.value) {
         case "all-movies":
            addMoviesToDom(allMovies, "All Movies");
            break;
         case "recent-movies":
            addMoviesToDom(moviesRecent, "Recent Movies");
            break;
         case "avengers-movies":
            movieFilter("Avengers");
            break;
         case "xmen-movies":
            movieFilter("X-Men");
            break;
         case "princess-movies":
            movieFilter("Princess");
            break;
         case "batman-movies":
            movieFilter("Batman");
            break;
         default:
            console.log("Ehmm...");
      }
   });
});
