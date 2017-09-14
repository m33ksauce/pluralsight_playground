var express = require('express');

var bookRouter = express.Router();

var router = function(nav){
    var books = [
        {
            title: 'The Great Gatsby',
            genre: 'Classic Fiction',
            author: 'F. Scott Fitzgerald',
            read: false
        },
        {
            title: 'Catching Fire',
            genre: 'Young Adult Fiction',
            author: 'Suzanne Collins',
            read: false
        },
        {
            title: 'Seveneves',
            genre: 'Science Fiction',
            author: 'Neal Stephenson',
            read: false
        },
    ];

    bookRouter.route('/')
        .get(function(req, res) {
            res.render('books', {
                title: 'Hello from render in ejs',
                nav: nav,
                books: books
            });
        });

    bookRouter.route('/:id')
        .get(function(req, res) {
            var id = req.params.id;
            res.render('bookView', {
                title: 'Hello from render in ejs',
                nav: nav,
                book: books[id]
            });
        });

    return bookRouter;
};

module.exports = router;