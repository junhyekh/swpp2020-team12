import axios from 'axios';
import * as actionCreators from './user';
import store from '../store';

const stubUser={
    id: 1,
    username: 'test',
    password: 'test1234',
    name: 'testname',
    message: 'hi'
};

const stubsigninUser={
    username: 'test',
    password: 'test1234',
}

describe('ActionCreators', () => {
    afterEach(() => {
        jest.clearAllMocks();
    })
    // Implementation using `spyOn` API
    it(`'signin' should signin correctly`, (done) => {
        const spy = jest.spyOn(axios, 'post')
            .mockImplementation((url,ar) => {
                return new Promise((resolve, reject) => {
                    const result = {
                        status: 204,
                        data: stubsigninUser,
                    };
                    resolve(result);
                });
            })
        store.dispatch(actionCreators.signin()).then(() => {
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        })
        .catch(done);
    });

    it(`'signin' should signin uncorrectly`, (done) => {
        const spy = jest.spyOn(axios, 'post')
            .mockImplementation((url,ar) => {
                return new Promise((resolve, reject) => {
                    const result = {
                        status: 204,
                        data: stubsigninUser,
                    };
                    reject(result);
                });
            })
        store.dispatch(actionCreators.signin()).then(() => {
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        })
        .catch(done);
    });



    it(`'signup' should signin correctly`, (done) => {
        const spy = jest.spyOn(axios, 'post')
            .mockImplementation((url,ar) => {
                return new Promise((resolve, reject) => {
                    const result = {
                        status: 201,
                        data: stubUser,
                    };
                    resolve(result);
                });
            })
        store.dispatch(actionCreators.signup()).then(() => {
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    });
    it(`'signout' should signout correctly`, (done) => {
        const spy = jest.spyOn(axios, 'get')
            .mockImplementation(url => {
                return new Promise((resolve, reject) => {
                    const result = {
                        status: 204,
                        data: stubUser,
                    };
                    resolve(result);
                });
            })
        store.dispatch(actionCreators.signout()).then(() => {
            expect(spy).toHaveBeenCalledTimes(1);
            done();
        });
    });
})