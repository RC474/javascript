var movies = [
    {title: "In Bruges", hasWatched: false, rating: 5},
    {title: "Frozen", hasWatched: false, rating: 4.5},
    {title: "Mad Fury Road", hasWatched: true, rating: 5},
    {title: "Les Miserbles", hasWatched: false, rating: 3.5}
];

for(let i = 0; i < movies.length; i++) {
    if(movies[i].hasWatched === true) {
        console.log("You have watched " + movies[i].title + " " + "- " + movies[i].rating + " " + "Stars")
    }
    else {
        console.log("You have not watched " + movies[i].title + " " + "- " + movies[i].rating + " " + "Stars")
    }
}