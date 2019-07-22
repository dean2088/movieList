import React from 'react';
import { configure, shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { matchSnapshot } from 'chai-karma-snapshot';
import Adapter from 'enzyme-adapter-react-16';
import Footer from '.';

chai.use(chaiEnzyme());
chai.use(matchSnapshot);
const expect = chai.expect;

let wrapper;

configure({ adapter: new Adapter() });

describe('components/Footer', () => {
  it('should render Footer', () => {
    wrapper = shallow(<Footer />);
    expect(wrapper).to.matchSnapshot();
  });
});
