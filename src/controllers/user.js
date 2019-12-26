const userService = require('../services/user');

function getAll(req, res, next) {
  return userService
    .getAll(req.query.page_number, req.query.page_size)
    .then(response => {
      return res.send(response);
    });
}

function create(req, res, next) {
  const payload = {
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    isActive: true,
    createdAt: Date.now()
  };

  return userService.create(payload).then(response => {
    return res.send(response);
  });
}

function getOne(req, res, next) {
  return userService.getUser(req.params.id).then(response => {
    return res.send(response);
  });
}

function updateUser(req, res, next) {
  const payload = {
    userId: Number(req.params.id),
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password
  };

  return userService.updateUser(payload).then(() => {
    return res.send('Success');
  });
}

function deleteUser(req, res, next) {
  return userService.deleteUser(req.params.id).then(response => {
    return res.send(response);
  });
}

module.exports = {
  getAll,
  create,
  getOne,
  updateUser,
  deleteUser
};
