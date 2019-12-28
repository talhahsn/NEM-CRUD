const userService = require('../services/user');

async function getAll(req, res) {
  const response = await userService.getAll(req.query.page_number, req.query.page_size);
  return res.send(response);

}

async function create(req, res) {
  const payload = {
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    isActive: true,
    createdAt: Date.now()
  };

  const response = await userService.create(payload);
  return res.send(response);
}

async function getOne(req, res) {
  const response = await userService.getUser(req.params.id);
  return res.send(response);
}

async function updateUser(req, res) {
  const payload = {
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };

  await userService.updateUser(payload);
  return res.send('Success');
}

async function deleteUser(req, res) {
  const response = await userService.deleteUser(req.params.id);
  return res.send(response);
}

module.exports = {
  getAll,
  create,
  getOne,
  updateUser,
  deleteUser
};
