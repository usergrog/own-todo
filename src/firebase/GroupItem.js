import React from 'react'
import {Component} from "react/lib/ReactBaseClasses";
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import * as actionCreators from '../actions/index'

class GroupItemComp extends Component {

    handleToggle = (e) => {
        e.preventDefault()
        this.props.shareGroup(this.props.group)
    }

    handleRemove = (e) => {
        e.preventDefault()
        this.props.removeGroup(this.props.group)
    }

    handleGroupClick = (e) => {
        this.props.selectGroupAndFetchTodos(this.props.group)
    }

    selectedItem = {
        color: 'red',
    }

    unSelectedItem = {
        color: 'black',
    }

    render() {
        return (
            <div className='groupItemContainer'
                 style={this.props.selectedGroup && this.props.group.id === this.props.selectedGroup.id ? this.selectedItem : this.unSelectedItem}
                 onClick={this.handleGroupClick}>
                <div className='groupItem'>
                    <div className='groupItemCheckBox'>
                        <input onChange={this.handleToggle}
                               type="checkbox"
                               checked={this.props.group.isShared}/>
                    </div>
                    <div className='groupItemTitle'>{this.props.group.text}</div>

                    <div className='groupItemDelete'>
                        <button onClick={this.handleRemove}>&times;</button>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        groups: state.todoReducer.groups,
        selectedGroup: state.todoReducer.selectedGroup
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch)
}

const GroupItem = connect(
    mapStateToProps,
    mapDispatchToProps
)(GroupItemComp)

export default GroupItem