/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/posts              ->  index
 * POST    /api/posts              ->  create
 * GET     /api/posts/:id          ->  show
 * PUT     /api/posts/:id          ->  update
 * DELETE  /api/posts/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Post from './post.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.extend(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Posts
export function index(req, res) {
  var params = {
      isActive: true
    },
    opts = {
      limit: parseInt(req.query.max) || 10,
      skip: parseInt(req.query.start) || 0,
      sort: req.query.sort || '-createdAt',
    };

  return Post.find(params, '', opts).exec()
    .then(stores => {
      var result = {
        data: stores,
        count: stores.length
      }
      return Post.find(params).count().exec().then(count => {
        result.count = count;
        return result;
      });
    })
    .then(respondWithResult(res))
    .catch(handleError(res));

}

// Gets a list of Posts
export function getByTitle(req, res) {
  var title = req.params.title.split('-').join(' ');
  return Post.findOne({ headline: new RegExp("^" + title.trim(), "i")}).exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Post from the DB
export function show(req, res) {
  return Post.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Post in the DB
export function create(req, res) {
  return Post.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Post in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Post.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Post in the DB
export function addComment(req, res) {
  var comment = req.body;
  comment.createdAt = new Date();
  comment.updatedAt = new Date();
  var update = {};
  return Post.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then((post) => {
      update = post;
      update.comments.push(comment);
      return update;
    })
    .then(saveUpdates(update))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Post from the DB
export function destroy(req, res) {
  return Post.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
