import React, {Component} from 'react'
import {connect} from 'react-redux'
import Communications from 'react-native-communications'
import _ from 'lodash'
import {employeeUpdate, employeeSave, employeeDelete} from '../actions'
import { Card, CardSection, Button, Confirm } from './common'
import EmployeeForm from './EmployeeForm'

class EmployeeEdit extends Component{
	state = { showModal: false };

	componentWillMount(){
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({prop, value});
		});
	}

	onButtonPress(){
		const {name, phone, shift} = this.props;
		this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid})
	}

	onTextPress(){
		const {phone, shift} = this.props

		Communications.text(phone, `Your upcoming shift is on ${shift}`)
	}

	onConfirmAccept(){
		const {uid} = this.props.employee
		this.props.employeeDelete({uid});
	}

	onConfirmDecline(){
		this.setState({showModal: false});
	}

	render() {
		return(
			<Card>
				<EmployeeForm />
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
				</CardSection>
				<CardSection>
					<Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
				</CardSection>
				<CardSection>
					<Button onPress={() => this.setState({showModal: !this.state.showModal})}>
						Delete Employee
					</Button>
				</CardSection>
				<Confirm
					onAccept={this.onConfirmAccept.bind(this)}
					onDecline={this.onConfirmDecline.bind(this)}
					visible={this.state.showModal}
				>
					Are you sure you want to delete this employee?
				</Confirm>
			</Card>
		)
	}
}

const mapStateToProps = (state) => {
	const {name, phone, shift} = state.employeeForm
	return {name, phone, shift}
}

export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);








