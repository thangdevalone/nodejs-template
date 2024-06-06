'use strict'

const mongoose = require('mongoose')

const connectString = 'mongodb://localhost:27017/ecoNode'
const { countConnect } = require('../helpers/check.connect')


class Database {
    constructor() {
        this.connect()
    }

    connect(type = 'mongodb') {
        if (1 === 0) {
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }
        mongoose.connect(connectString,{maxPoolSize:50}).then(_ => {
            console.log('Connection Mongodb Success');

            countConnect()
        })
            .catch(err => console.log('error Connect'))
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }
        return Database.instance
    }
}
const instanceMongodb = Database.getInstance()

module.exports = instanceMongodb