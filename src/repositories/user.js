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

async function create(payload) {
  let counter = await User.count();
  payload.userId = counter++;
  return User.create(payload);
}

function findOne(value, attr) {
  return User.findOne({ [attr]: value });
}

async function update(payload) {
  const currObj = await findOne(payload.email, 'email');
  payload = JSON.parse(JSON.stringify(payload));
  Object.keys(payload).forEach(key => {
    currObj[key] = payload[key];
  });
  return User.findOneAndUpdate({ email: payload.email }, currObj);
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
