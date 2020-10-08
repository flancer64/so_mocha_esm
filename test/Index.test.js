import Index from '../src/Index';
import {describe, it} from 'mocha';
import assert from 'assert';

describe('Index', function () {

    it('`process` method runs correctly', function (done) {
        assert.strictEqual(Index.process(2), 4);
        done();
    });
});
