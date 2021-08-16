const express = require('express');
const createError = require('http-errors');

const baseService = require('../base/service');
const examsheetModel = require('../../models/examsheet.model');
const examsheetService = baseService(examsheetModel, ['user', 'questions']);

const checkModel = (model, body, next) => {
    const validationErrors = new model(body).validateSync();
    if (validationErrors) {
        next(
            new createError.BadRequest(
                JSON.stringify({
                    message: 'Scmema validation error',
                    error: validationErrors
                })
            )
        );
        return false;
    }
    return true;
};

// Create a new person.
exports.create = (req, res, next) => {
    if (!checkModel(examsheetModel, req.body, next)) {
        return;
    }
    const { name, user, questions } = req.body;

    const newExamsheet = {
        user, questions: questions || []
    };

    return examsheetService.create(newExamsheet)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return examsheetService.findAll()
        .then(examsheets => {
            res.json(examsheets);
        });
};

exports.findOne = (req, res, next) => {
    return examsheetService.findOne(req.params.id)
        .then(examsheet => {
            if (!examsheet) {
                return next(new createError.NotFound("Examsheet is not found"));
            }
            return res.json(examsheet);
        });
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    if (!checkModel(examsheetModel, req.body, next)) {
        return;
    }

    return examsheetService.update(req.params.id, req.body)
        .then(person => {
            res.json(person);
        })
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return examsheetService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};
