import React from 'react';
import { configure, shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { matchSnapshot } from 'chai-karma-snapshot';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from '.';

chai.use(chaiEnzyme());
chai.use(matchSnapshot);
const expect = chai.expect;

let wrapper;

configure({ adapter: new Adapter() });

describe('components/MovieCard', () => {
  it('should render MovieCard', () => {
    wrapper = shallow(<MovieCard />);
    expect(wrapper).to.matchSnapshot();
  });
});
