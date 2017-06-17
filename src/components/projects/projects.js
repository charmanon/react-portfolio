import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import Section from '../section/section';
import placeholder from './header.jpg';
import './projects.css';
import faker from 'faker';

export default class Projects extends Component {
	constructor(props){
		super(props);
		this.state = {
			selectedProject: {
				projectName: 'THIS IA S ',
				description: 'asldjfwk'
			},
			projects : [
				{
					projectName: faker.name.title(),
					description: faker.lorem.paragraph()
				},
				{
					projectName: faker.name.title(),
					description: faker.lorem.paragraph()
				},
				{
					projectName: faker.name.title(),
					description: faker.lorem.paragraph()
				}
			]
		}
	}

	renderTiles = () => {
		return this.state.projects.map(item => {
			return (
				<Image src ={placeholder} className='tile' />
			)
		})
	}

	handleSelectProject = (project) => {
		this.setState({selectedProject: project})
	}

	renderProject = () => {
		return (
			<div>
				<h3>{this.state.projects[0].projectName}</h3>
				<p>{this.state.project.description}</p>
			</div>
		)
	}

	render() {
		return (
			<div className='projects'>
				<Section sectionTitle='Projects'>
					<Col xs={4}>{this.state.projects[0].projectName}</Col>
					<Col xs={6}>
						<Image className='tile' src = {faker.image.imageUrl()}/>
						<Image className='tile' src = {placeholder}/>
						<Image className='tile' src = {placeholder}/>
						<Image className='tile' src = {placeholder}/>
					</Col>
				</Section>
			</div>
		)
	}
}