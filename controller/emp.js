const Emp = require("../models/Employee");
const asyncHandler = require("express-async-handler");

exports.getEmps = asyncHandler(async (req, res, next) => {
  const emp = await Emp.findAll();
  res.status(200).json({
    success: true,
    data: emp,
  });
});

exports.createEmp = asyncHandler(async (req, res, next) => {
  console.log(req.body, "-----------------------");
  const emp = await Emp.create(req.body);
  res.status(200).json({
    success: true,
    data: emp,
  });
});

exports.updateEmp = asyncHandler(async (req, res, next) => {
  console.log(req.body, "-----------------------" + req.body.id);
  if (req.body.id == undefined) throw new Error(" ID-baihgui baina.");

  const emp = await Emp.findByPk(req.body.id);
  if (!emp) throw new Error(" ID-baihgui baina.");

  emp.update(req.body);
  res.status(200).json({
    success: true,
    data: emp,
  });
});

exports.deleteEmp = asyncHandler(async (req, res, next) => {
  const emp = await Emp.findByPk(req.query.id);
  if (!emp) throw new Error(" ustgah Ajiltanii ID-baihgui baina.");

  emp.destroy();
  res.status(200).json({
    success: true,
  });
});

exports.selectEmp = asyncHandler(async (req, res, next) => {
  const emp = await Emp.findByPk(req.params.id);

  if (!emp) throw new Error(" ID-baihgui baina.");

  res.status(200).json({
    success: true,
    data: emp,
  });
});
