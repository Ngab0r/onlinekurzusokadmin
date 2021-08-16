const express = require('express');
const createError = require('http-errors');

const questionService = require('./question.service');

// Create a new question.
exports.create = (req, res, next) => {
    const { name, answer, correctAnswer, type } = req.body;
    if (!name || !answer || !correctAnswer || !type) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newQuestion = {
        name, answer, correctAnswer, type
    };

    return questionService.create(newQuestion)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return questionService.findAll()
        .then(question => {
            res.json(question);
        });
};

exports.findOne = (req, res, next) => {
    return questionService.findOne(req.params.id)
        .then(question => {
            if (!question) {
                return next(new createError.NotFound("Question is not found"));
            }
            return res.json(question);
        });
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    const { first_name, name, email } = req.body;
    if (!name || answer || !correctAnswer || !type) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const update = {
        name, answer, correctAnswer, type
    };
    return questionService.update(req.params.id, update)
        .then(question => {
            res.json(question);
        })
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return questionService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};
