
import React from 'react';
import App from './app';
import { mount, shallow } from 'enzyme';


describe('<App />', () => { 

	it('it renders 1 <App /> component', () = {
		let component = shallow(< App/>);
		expect(component).toHaveLength(1);
	});

	it('it renders props correctly', () = {
		let component = shallow(< App name ="app" />);
		expect(component.instance().props.name).toBe('app');
	});

	it('It updates the counter on button  click', () => {
		let component = mount(<App />);
		const button = component.find('button');
		button.simulate('click'); 
		button.simulate('click');
		button.simulate('click');
		expect(component.state().counter).toEqual(3);

	});
});

