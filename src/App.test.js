import { render, screen } from '@testing-library/react';
import Banner from './Components/Banner'
import SearchBar from './Components/SearchBar'
import DeveloperInfo from './Components/DeveloperInfo'

import {shallow} from 'enzyme';

describe('Banner testing',()=>{
  let wrapper;
  beforeEach(()=>{
     wrapper = shallow(<Banner/>);
  })

  test('Testing Title is present in the banner',()=>{
    expect(wrapper.find("div").text()).toContain('Weather Update')
  })

  test('Banner contains Home & Devinfo nav links',()=>{
    expect(wrapper.find("#Home").text()).toContain('Home')
    expect(wrapper.find("#devinfo").text()).toContain('Developer Info')
  })

  test('Clicking Dev Info Link takes to Dev Info Pages',()=>{
    wrapper.find("#devinfo").simulate('click')
    let wrapper2 = shallow(<DeveloperInfo/>)
    expect(wrapper2.find('h2').text()).toContain('This is developed by')
  })

})

describe('Content testing',()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper= shallow(<SearchBar/>)
  })
  test('Home page instructs user to enter City name',()=>{
    expect(wrapper.find('#result').text()).toContain('Enter a city name to get the temperature!')
  })
  test('Entering valid city returns temperature',()=>{
    wrapper.find('#searchbox').simulate('change', { target: { name: 'city', value: 'Ooty' } })
    wrapper.find('#search-btn').simulate('click')
    expect(wrapper.find('#result').text()).toContain('Weather in Ooty is')
  })
  test('Entering invalid city returns error',()=>{
    wrapper.find('#searchbox').simulate('change', { target: { name: 'city', value: 'juy87v' } })
    wrapper.find('#search-btn').simulate('click')
    setTimeout(()=>{
      expect(wrapper.find('#result').text()).toContain('Unable to find the city in our database')
    },1000)
  })
  test('Entering nothing in input instructs user to enter city',()=>{
    wrapper.find('#searchbox').simulate('change', { target: { name: 'city', value: 'Ooty' } })
    wrapper.find('#search-btn').simulate('click')
    expect(wrapper.find('#result').text()).toContain('Weather in Ooty is')
    wrapper.find('#searchbox').simulate('change', { target: { name: 'city', value: '' } })
    wrapper.find('#search-btn').simulate('click')
    setTimeout(()=>{
      expect(wrapper.find('#result').text()).toContain('Enter a city name to get the temperature!')
     },1000)

  })
})

