import React from 'react'
import {Component} from "react/lib/ReactBaseClasses";
import {connect} from 'react-redux'
import * as actionCreators from '../actions'
import {bindActionCreators} from "redux";
import GroupItem from "./GroupItem";

class GroupsListComp extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        if (this.refs.newGroupTitle.value) {
            this.props.addGroup({text: this.refs.newGroupTitle.value, isShared: false, uid: this.props.userId})
            this.refs.groupsForm.reset()
        } else {
            this.props.showError('Please input title for group')
        }

    }

    render() {
        return (
            <form ref='groupsForm' className='groupsForm' onSubmit={this.handleSubmit}>
                <div id='addGroupLine'>
                    <input id='groupTitle' type="text" ref='newGroupTitle'/>
                    <input id='addGroupButton' type="submit" value='ADD GROUP'/>
                </div>
                <div className='groupsBox'>
                    {this.props.groups && this.props.groups.map(group =>
                        <GroupItem key={group.id} group={group}/>
                    )}
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        groups: state.todoReducer.groups,
        userId: state.authReducer.userId
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
}

const GroupsList = connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupsListComp)

export default GroupsList