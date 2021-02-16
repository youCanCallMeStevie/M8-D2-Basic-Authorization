const express = require("express")
const UserModel = require("../../../models/usersSchema")





exports.getAllUsersController = async (req, res, next) => {
  try {
    const users = await UserModel.find()
    res.send(users)
  } catch (error) {
    next(error)
  }
}



exports.getMyUserInfoController =  async (req, res, next) => {
  try {
    res.send(req.user)
  } catch (error) {
    next(error)
  }
}

exports.editMyUserInfoController =  async (req, res, next) => {
  try {
    const updates = Object.keys(req.body)
    console.log("Updates ", updates)

    updates.forEach(update => (req.user[update] = req.body[update]))
    await req.user.save()
    res.send(req.user)

    res.send(updates)
  } catch (error) {
    next(error)
  }
}

exports.deleteMyUserInfoController =  async (req, res, next) => {
  try {
    await req.user.deleteOne()
    res.status(204).send("Deleted")
  } catch (error) {
    next(error)
  }
}

