const User = require("../models/User");
const asyncHandler = require("express-async-handler");

exports.getUsers = asyncHandler(async (req, res, next) => {
  const user = await User.findAll();
  res.status(200).json({
    success: true,
    data: user,
  });
});

exports.createUser = asyncHandler(async (req, res, next) => {
  console.log(req.body, "-----------------------");
  const user = await User.create(req.body);
  res.status(200).json({
    success: true,
    data: user,
  });
});

exports.updateUser = asyncHandler(async (req, res, next) => {
  console.log(req.body, "-----------------------");
  if (req.body.id == undefined) throw new Error(" ID-baihgui baina.");

  const user = await User.findByPk(req.body.id);
  if (!user) throw new Error(" ID-baihgui baina.");

  user.update(req.body);
  res.status(200).json({
    success: true,
    data: user,
  });
});

exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByPk(req.query.id);

  if (!user) throw new Error(" ustgah Hereglegchiin ID-baihgui baina.");

  user.destroy();
  res.status(200).json({
    success: true,
  });
});

exports.selectUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByPk(req.params.id);

  if (!user) throw new Error(" ID-baihgui baina.");
  res.status(200).json({
    success: true,
    data: user,
  });
});

exports.login = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({
    where: { username: username, password: password },
  });

  if (user == null) throw new Error(" Hereglegch eswel password buruu baina ");

  res.status(200).json({
    success: true,
    data: user,
  });
});
