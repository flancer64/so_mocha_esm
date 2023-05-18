import Util from '../src/Util.js';
import {describe, it} from 'mocha';
import assert from 'assert';

describe('Util', function () {

    it('runs correctly', function (done) {
        assert.strictEqual(Util(2), 4);
        done();
    });
});
