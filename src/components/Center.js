import React, { Component } from 'react'
import './center.css'
import Items from './items';
import Search from './search';
import InputForm from './inputForm'

class CenterElem extends Component{

  

    constructor(){
        super()
        this.state ={
            nme: 'Input',
            hide: false,
            displayStyle : {
                display: 'none'
            },
            myTasks : [ ],
            inputValue :''
        }
        this.hideList = this.hideList.bind(this)
        this.unhideList = this.unhideList.bind(this)
        this.searching = this.searching.bind(this)
        this.del = this.del.bind(this)
        this.edit = this.edit.bind(this)
        this.hideInput = this.hideInput.bind(this)
        this.tasks = this.state.myTasks
        this.idTobeRemoved = 0
    }

    unhideList(t,p,prop){
      
        let temp = {
            id: Math.floor(Math.random() *100),
            task: t,
            priority: p
        }
        let temp2 = [...this.state.myTasks,temp]
        this.setState({
            hide: false,
            displayStyle : {
                display: 'none'
            },
            myTasks: temp2
        })
        
    }

    hideInput(){
        this.setState({
            hide: false,
            displayStyle : {
                display: 'none'
            },
            
        })
    }

    itemRemover(t,p){
        let  arr = this.state.myTasks
      
        arr = arr.filter((element) => element.id !== this.idTobeRemoved)
        let n = {
            id: Math.floor(Math.random() *100),
            task: t,
            priority: p
        }
        this.setState({
            hide: false,
            displayStyle : {
                display: 'none'
            },
            myTasks: [...arr,n]
        })
    }

    del(k){
        console.log(k);
        let  arr = this.state.myTasks

        arr = arr.filter((element) => element.id !== k.id)
        this.setState({
            myTasks: [...arr]
        })
    }

   edit(prop){
    this.setState({
        nme:'Edit Task',
        hide:true, 
        displayStyle: {
            display: 'flex'
        },
        inputValue: prop.task
    })
  
    console.log('dell'+ prop.id);
    this.del(prop)
   }

   searching(value){
    if(value === ''){
        this.setState({
            myTasks: this.tasks
        })
        // console.log('it is empty')
    }

    // console.log(value.target.value)
   this.setState({
    myTasks: this.state.myTasks.filter((element) => element.task.includes(value.target.value))
   })
   
//    console.log(this.state.myTasks);
//    console.log(value.target.value);

   }

   hideList(){

    this.setState({
        nme:'Add Task',
        hide:true, 
        displayStyle: {
            display: 'flex'
        },
        inputValue:''
    })
   }

    render(){
        return(
          <div className='parentOfCenter'>
            <div className='center' hidden={this.state.hide} >
                <Search typing = {this.searching}/>
                <div className='list'>
                    {
                        this.state.myTasks.map((task) => <Items key={task.id} id={task.id} check={this.del} taskName={task.task} edit={this.edit} priority={task.priority}/>)
                    }
                </div>
                <div className='btnAddTask'><button className='' onClick={this.hideList}>AddTask</button></div>
            </div> 
            <InputForm nme={this.state.nme}  display ={this.state.displayStyle} clickerFun={this.unhideList} hideInput={this.hideInput} /> 
          </div>
        );
    }

}
 export default CenterElem