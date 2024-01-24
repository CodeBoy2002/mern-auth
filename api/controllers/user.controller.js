import express from 'express'
import mongoose from 'mongoose'
import User from '../models/user.model.js'

const signUp = async (req, res) => {
    res.send('API for signup')
}

export { signUp }