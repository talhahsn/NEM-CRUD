const User = require('../models/user');

async function getAll(pageNumber, pageSize) {
  if (pageNumber && pageSize) {
    pageNumber = parseInt(pageNumber);
    pageSize = parseInt(pageSize);
    return (await User.paginate({}, { page: pageNumber, limit: pageSize }))
      .docs;
  }

  return User.find();
}

function create(payload) {
  return User.count().then(counter => {
    payload.userId = counter++;
    return User.create(payload);
  });
}

function findOne(id) {
  return User.findOne({ userId: id });
}

function update(payload) {
  return findOne(payload.userId).then(currObj => {
    payload = JSON.parse(JSON.stringify(payload));
    Object.keys(payload).forEach(key => {
      currObj[key] = payload[key];
    });
    return User.findOneAndUpdate({ userId: payload.userId }, currObj);
  });
}

function deleteUser(payload) {
  return User.deleteOne({ userId: payload });
}

module.exports = {
  getAll,
  create,
  findOne,
  update,
  deleteUser
};
