const userRepo = require('../repositories/user');

async function getAll(pageNumber, pageSize) {
  return await userRepo.getAll(pageNumber, pageSize);
}

async function create(payload) {
  return await userRepo.create(payload);
}

async function getUser(userId) {
  return await userRepo.findOne(userId, 'userId');
}

async function updateUser(payload) {
  return await userRepo.update(payload);
}

async function deleteUser(payload) {
  return await userRepo.deleteUser(payload);
}

module.exports = {
  getAll,
  create,
  getUser,
  updateUser,
  deleteUser
};
