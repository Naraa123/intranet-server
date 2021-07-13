const Org = require("../models/Org");
const asyncHandler = require("express-async-handler");

exports.getOrgs = asyncHandler(async (req, res, next) => {
  const org = await Org.findAll();
  res.status(200).json({
    success: true,
    data: org,
  });
});

exports.createOrg = asyncHandler(async (req, res, next) => {
  if (req.body.name == undefined) throw new Error(" name oruulna uu??");
  if (req.body.ceo_name == undefined) throw new Error(" ceo name oruulna uu??");

  const org = await Org.create(req.body);

  res.status(200).json({
    success: true,
    data: org,
  });
});

exports.updateOrg = asyncHandler(async (req, res, next) => {
  console.log(req.body, "----------------------- " + req.body.id);
  if (req.body.id == undefined) throw new Error(" ID oruulagui baina.");

  const org = await Org.findByPk(req.body.id);
  if (!org) throw new Error(req.body.id + " gesen ID baihgui baina.");

  org.update(req.body);

  res.status(200).json({
    success: true,
    data: org,
  });
});

exports.deleteOrg = asyncHandler(async (req, res, next) => {
  const org = await Org.findByPk(req.query.id);

  if (!org)
    throw new Error(
      "ustgah ID-baihgui baina. ID zuw oruulna uu eswel ali hediin ustgagdsan baina "
    );

  org.destroy();
  res.status(200).json({
    success: true,
  });
});

exports.selectOrg = asyncHandler(async (req, res, next) => {
  const org = await Org.findByPk(req.params.id);

  if (!org) throw new Error(req.params.id + " gesen ID-baihgui baina.");
  res.status(200).json({
    success: true,
    data: org,
  });
});
