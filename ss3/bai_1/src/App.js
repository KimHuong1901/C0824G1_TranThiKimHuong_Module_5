import {Component} from "react";

class Studentist extends Component {
    componentDidMount() {
    }

    constructor() {
        super();
        this.state = {
            students: [
                {
                    id: 1,
                    name: 'Nguyễn Văn A',
                    age: 30,
                    address: 'Hà Nội'
                }
            ]
        }
    }

    render() {
        return (
            <>
                <h2>Student List</h2>
                <table border="1" className="table table-striped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    {this.state.students.map((student, index) => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))}
                </table>
            </>
        )
    }
}
export default Studentist;