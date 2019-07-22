import React from 'react';
import { configure, shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { matchSnapshot } from 'chai-karma-snapshot';
import Adapter from 'enzyme-adapter-react-16';
import Header from '.';

chai.use(chaiEnzyme());
chai.use(matchSnapshot);
const expect = chai.expect;

let wrapper;

configure({ adapter: new Adapter() });

describe('components/Header', () => {
  it('should render Header', () => {
    wrapper = shallow(<Header />);
    expect(wrapper).to.matchSnapshot();
  });
});
