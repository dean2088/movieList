import React from 'react';
import { configure, shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { matchSnapshot } from 'chai-karma-snapshot';
import Adapter from 'enzyme-adapter-react-16';
import SubHeader from '.';

chai.use(chaiEnzyme());
chai.use(matchSnapshot);
const expect = chai.expect;

let wrapper;

configure({ adapter: new Adapter() });

describe('components/SubHeader', () => {
  it('should render SubHeader', () => {
    wrapper = shallow(<SubHeader />);
    expect(wrapper).to.matchSnapshot();
  });
});
