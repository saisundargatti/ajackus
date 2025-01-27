import { putCall } from "../apicalls/put";

const EditUser = ({ setEditUser, activeId, setUsers, editUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Create a new user object with updated values
    const updatedUser = {
      ...editUser,
      name: formData.get("name"),
      email: formData.get("email"),
      company: { name: formData.get("department") },
    };

    // Call the API to update the user
    putCall(updatedUser, activeId, setUsers);

    setEditUser(null);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={editUser.name}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            defaultValue={editUser.email}
            required
          />
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input
            type="text"
            name="department"
            defaultValue={editUser.company?.name || ""} // Handle undefined company
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit">Save</button>
          <button type="button" onClick={() => setEditUser(null)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
