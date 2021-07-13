const Pos = require("../models/Position");
const asyncHandler = require("express-async-handler");

exports.getPositions = asyncHandler(async (req, res, next) => {
  const pos = await Pos.findAll();
  res.status(200).json({
    success: true,
    data: pos,
  });
});

exports.createPos = asyncHandler(async (req, res, next) => {
  console.log(req.body, "-----------------------");
  const pos = await Pos.create(req.body);
  res.status(200).json({
    success: true,
    data: pos,
  });
});

exports.updatePos = asyncHandler(async (req, res, next) => {
  console.log(req.body, "-----------------------");
  if (req.body.id == undefined) throw new Error(" ID oruulagui baina.");

  const pos = await Pos.findByPk(req.body.id);
  if (!pos) throw new Error(" ID-baihgui baina.");

  pos.update(req.body);
  res.status(200).json({
    success: true,
    data: pos,
  });
});

exports.deletePos = asyncHandler(async (req, res, next) => {
  const pos = await Pos.findByPk(req.query.id);
  if (!pos) throw new Error("ustgah ID-baihgui baina.");

  pos.destroy();
  res.status(200).json({
    success: true,
  });
});

exports.selectPos = asyncHandler(async (req, res, next) => {
  const pos = await Pos.findByPk(req.params.id);
  if (!pos) throw new Error(" ID-baihgui baina.");

  res.status(200).json({
    success: true,
    data: pos,
  });
});
