const Dep = require("../models/Department");
const asyncHandler = require("express-async-handler");

exports.getDeps = asyncHandler(async (req, res, next) => {
  const dep = await Dep.findAll();
  res.status(200).json({
    success: true,
    data: dep,
  });
});

exports.createDep = asyncHandler(async (req, res, next) => {
  console.log(req.body, "-----------------------");
  const dep = await Dep.create(req.body);
  res.status(200).json({
    success: true,
    data: dep,
  });
});

exports.updateDep = asyncHandler(async (req, res, next) => {
  console.log(req.body, "-----------------------");
  if (req.body.id == undefined) throw new Error(" ID-baihgui baina.");

  const dep = await Dep.findByPk(req.body.id);
  if (!dep) throw new Error(" ID-baihgui baina.");

  dep.update(req.body);
  res.status(200).json({
    success: true,
    data: dep,
  });
});

exports.deleteDep = asyncHandler(async (req, res, next) => {
  const dep = await Dep.findByPk(req.query.id);
  if (!dep) throw new Error("ustgah ID-baihgui baina.");

  dep.destroy();
  res.status(200).json({
    success: true,
  });
});

exports.selectDep = asyncHandler(async (req, res, next) => {
  const dep = await Dep.findByPk(req.params.id);

  if (!dep) throw new Error(" ID-baihgui baina.");

  res.status(200).json({
    success: true,
    data: dep,
  });
});
