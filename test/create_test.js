const assert = require('assert');
const User = require('../src/user')

describe('Creating of a new record', () => {
    it('save a user', () => {
        const mary = new User({
            name: 'mary'
        })
        mary.save()
    })
})

