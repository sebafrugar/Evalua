const UserController = require('../controllers/user.controller');
const ReviewController = require('../controllers/review.controller')

module.exports = function(app){

    app.post("/api/register", UserController.Register);
    app.post("/api/login", UserController.Login);
    app.post("/api/logout", UserController.Logout);
    app.get("/api/users", UserController.getAll);
    app.get('/api/user/:id', UserController.getUser);

    app.post("/api/create", ReviewController.createNewReview );
    app.put("/api/update/:id", ReviewController.updateReview);
    app.delete("/api/delete/:id", ReviewController.deleteReview);
    app.get("/api/allreview", ReviewController.allReviews);
    app.get('/api/review/:id', ReviewController.reviewById);
}

