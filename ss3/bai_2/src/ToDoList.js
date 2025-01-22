import {Component} from "react";
import "./App.css"
class ToDoList extends Component{
    componentDidMount(){
    }
    constructor(props) {
        super(props);
        this.state={
            list: [],
            item: ''
        }
    }
    handleChange = (event) =>{
        this.setState({
            item: event.target.value
        })
    }
    handleAddItem = () => {
        const {item, list } = this.state;
        if(item.trim() !== ''){
            this.setState({
                list: [...this.state.list, item],
                item: ''
            })
        }
    }
    render(){
        return (
            <div className="container">
                <div className="todo">
                    <h2> Todo List </h2>
                    <input
                        type="text"
                        value={this.state.item}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleAddItem}>Add</button>
                    <ol>
                        {this.state.list.map((content, index) => (
                            <li key={index}>{content}</li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}
export default ToDoList;