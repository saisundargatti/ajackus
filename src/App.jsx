import React, { useState, useEffect } from "react";
import RenderForm from "./components/adduser/AddUser";
import "./App.css"; // Import the CSS file
import { fetchUsers } from "./components/apicalls/get";
import EditUser from "./components/edituser/EditUser";
import { deleteCall } from "./components/apicalls/delete";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  // Edit user
  const handleEdit = (user) => {
    setEditUser(user);
  };

  // Fetch users
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };

    fetchData();
  }, []);

  // Delete user
  const handleDelete = async (id) => {
    await deleteCall(id);
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const showForm = () => {
    setIsFormVisible(true);
  };

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const totalPages = Math.ceil(users.length / usersPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="app">
      <h1>Users List</h1>
      <button className="add-button" onClick={() => showForm()}>
        Add User
      </button>
      {isFormVisible && (
        <RenderForm
          setUsers={setUsers}
          setIsFormVisible={setIsFormVisible}
          users={users}
        />
      )}
      <div className="card-container">
        {currentUsers.map((user) => (
          <div className="user-card" key={user.id}>
            {editUser?.id === user.id ? (
              <EditUser
                setEditUser={setEditUser}
                setUsers={setUsers}
                activeId={editUser?.id}
                editUser={editUser}
              />
            ) : (
              <div>
                <h3>{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Department: {user.company?.name || "N/A"}</p>
              </div>
            )}
            <div className="card-actions">
              {editUser?.id !== user.id && (
                <button onClick={() => handleEdit(user)}>
                  <FaEdit size={18} />
                </button>
              )}
              <button onClick={() => handleDelete(user.id)}>
                <MdDelete size={18} />
              </button>
            </div>
          </div>
        ))}

        {/* Pagination Controls */}
        <ul className="pagination">
          {pageNumbers.map((page) => (
            <li key={page}>
              <button
                className={currentPage === page ? "active-page" : "not-active"}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
