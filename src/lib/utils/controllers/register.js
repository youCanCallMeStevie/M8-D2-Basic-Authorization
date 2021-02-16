const express = require("express")
const UserModel = require("../../../models/usersSchema")

exports.registerController = async (req, res, next) => {
    try {
      const newUser = new UserModel(req.body)
      const { _id } = await newUser.save()
  
      res.status(201).send(_id)
    } catch (error) {
      next(error)
    }
  }