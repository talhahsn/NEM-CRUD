const userRepo = require('../repositories/user');

function getAll(pageNumber, pageSize) {
  return userRepo.getAll(pageNumber, pageSize).then(response => {
    return response;
  });
}

function create(payload) {
  return userRepo.create(payload).then(response => {
    return response;
  });
}

function getUser(payload) {
  return userRepo.findOne(payload).then(response => {
    return response;
  });
}

function updateUser(payload) {
  return userRepo.update(payload).then(response => {
    return response;
  });
}

function deleteUser(payload) {
  return userRepo.deleteUser(payload).then(response => {
    return response;
  });
}

module.exports = {
  getAll,
  create,
  getUser,
  updateUser,
  deleteUser
};
