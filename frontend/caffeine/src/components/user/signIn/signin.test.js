import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import SignIn from './signIn';
import { getMockStore } from '/home/harvey/test/swpp2020-team12/frontend/caffeine/src/test-utils/mocks.js';
import { history } from '/home/harvey/test/swpp2020-team12/frontend/caffeine/src/store/store.js';
import * as actionCreators from '/home/harvey/test/swpp2020-team12/frontend/caffeine/src/store/actions/user.js';


const stubInitialState = {
    user: [
    { id: 1, username: 'test', password: "test1234", name:"testname", message:"hi"},
  ],
};

const mockStore = getMockStore(stubInitialState);

describe('<SignIn />', () => {
  let signin
  beforeEach(() => {
    signin = (
      <Provider store={mockStore}>
        <ConnectedRouter history={history}>
        <Switch>
          <Route path='/' exact component={SignIn} />
        </Switch>
        </ConnectedRouter>
      </Provider>
    );
  })

  
    it('should render without errors', () => {
      const component = mount(signin);
      expect(component.length).toBe(1);
    });
    it(`should call 'handlerSignIn'`, () => {
      const handlerSignIn = jest.spyOn(actionCreators, 'signin')
        .mockImplementation(id => {return dispatch => {}; });
      const component = mount(signin);
      const wrapper = component.find('#sign-in-button');
      wrapper.simulate('click');
      expect(handlerSignIn).toHaveBeenCalledTimes(1);
    });
    it(`should call 'handlerSignIn'`, () => {
      const spyHistoryPush = jest.spyOn(history, 'push')
      .mockImplementation(path => {});
      const component = mount(signin);
      const wrapper = component.find('#sign-up-button');
      wrapper.simulate('click');
      expect(spyHistoryPush).toHaveBeenCalledTimes(1);
    });
    it('should change username input', () => {
      const component = mount(signin);
      const wrapper = component.find('#username');
      wrapper.simulate('change', { target: { value: 'test'} });
      const newInstance = component.find(SignIn.WrappedComponent).instance();
      expect(newInstance.state.username).toEqual('test');
    });
    it('should change password input', () => {
      const component = mount(signin);
      const wrapper = component.find('#password');
      wrapper.simulate('change', { target: { value: 'test'} });
      const newInstance = component.find(SignIn.WrappedComponent).instance();
      expect(newInstance.state.password).toEqual('test');
    });


  });