const Review = require('../model/reviewModel')

// Controller to get all reviews
const getAllReviews = (req, res) => {
    Review.find({}).then(reviews => {
        res.json(reviews)
        console.log('getting reviews')
    })
}

// Controller to get review by _id
const getReviewById = (req, res) => {
    Review.findById(req.params.id).then(review => {
        res.json(review)
    })
}

// Controller to create an review
const createReview = (req, res) => {
    Review.create(req.body).then(review => {
        res.json(review)
    })
}

// Controller to update an review
const updateReview = (req, res) => {
    Review.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(review => {
        res.json(review)
    })
}

// Controller to delete an review
const deleteReview = (req, res) => {
    Review.findByIdAndDelete(req.params.id).then(author => {
        res.json({
            "status": "success",
            "msg": "review deleted"
        })
    })
}

module.exports = {
    getAllReviews,
    getReviewById,
    createReview,
    updateReview,
    deleteReview
}