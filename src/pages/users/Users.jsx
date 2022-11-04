import "./users.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";

const Users = () => {
  return (
    <div className='users'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className="list">
        <Datatable head={"Add New User"}/>
        </div>
      </div>
    </div>
  )
}

export default Users
