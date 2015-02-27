var assert = require('assert');
var formatters = require('../lib/formatters.js');

describe('formatters', function () {
    describe('inputPostFormatter', function () {
        it('should return the correct value', function () {
            
            // input as strings and numbers
            assert.deepEqual(formatters.inputPostFormatter({
                from: '0x00000',
                to: '0x00000',
                payload: {test: 'test'},
                ttl: 200,
                workToProve: 1000,
                topic: ['hello','mytopics']
            }), {
                from: '0x00000',
                to: '0x00000',
                payload: '0x7b2274657374223a2274657374227d',
                ttl: '0xc8',
                workToProve: '0x3e8',
                topic: ['0x68656c6c6f','0x6d79746f70696373']
            });

        });
    });
});