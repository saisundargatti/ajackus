import { postUser } from "../apicalls/post";
import "./AddUser.css";

const RenderForm = ({ setIsFormVisible, users, setUsers }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const nextId =
      users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;

    const user = {
      id: nextId,
      name: formData.get("name"),
      email: formData.get("email"),
      company: { name: formData.get("department") },
    };

    postUser(user, setUsers);

    // Close the form
    setIsFormVisible(false);
  };

  return (
    <div className="form-container">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-group">
          <label>Department:</label>
          <input type="text" name="department" required />
        </div>
        <div className="form-actions">
          <button type="submit">Save</button>
          <button onClick={() => setIsFormVisible(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default RenderForm;
