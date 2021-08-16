const express = require('express');
const createError = require('http-errors');

const paymentService = require('./payment.service');

// Create a new payment.
exports.create = (req, res, next) => {
    const { last_name, first_name, email } = req.body;
    if (!last_name || !first_name || !email) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const newPayment = {
        firstName: first_name,
        lastName: last_name,
        email: email
    };

    return paymentService.create(newPayment)
        .then(cp => {
            res.status(201);
            res.json(cp);
        })
        .catch(err => next(new createError.InternalServerError(err.message)));
};

exports.findAll = (req, res, next) => {
    return paymentService.findAll()
        .then(people => {
            res.json(people);
        });
};

exports.findOne = (req, res, next) => {
    return paymentService.findOne(req.params.id)
        .then(payment => {
            if (!payment) {
                return next(new createError.NotFound("Payment is not found"));
            }
            return res.json(payment);
        });
};

exports.update = (req, res, next) => {
    const id = req.params.id;
    const { first_name, last_name, email } = req.body;
    if (!last_name || !first_name || !email) {
        return next(
            new createError.BadRequest("Missing properties!")
        );
    }

    const update = {
        firstName: first_name,
        lastName: last_name,
        email: email
    };
    return paymentService.update(req.params.id, update)
        .then(payment => {
            res.json(payment);
        })
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};

exports.delete = (req, res, next) => {
    return paymentService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => {
            next(new createError.InternalServerError(err.message));
        });
};
