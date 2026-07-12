import React, { useEffect, useState } from "react";
import "../admin_css/Departments.css";
import DepartmentForm from "./DepartmentForm";

const Departments = () => {
    const [departments, setDepartments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editDepartment, setEditDepartment] = useState(null);

// API
  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    // connect Backend API
  };

  const handleAddDepartment = () => {
    setEditDepartment(null);
    setIsModalOpen(true);
  };

  const handleEditDepartment = (department) => {
    setEditDepartment(department);
    setIsModalOpen(true);
  };

  const handleSaveDepartment = async (departmentData) => {
    console.log(departmentData);

    // Backend API
    // POST
    // PUT
    setIsModalOpen(false);
    fetchDepartments();
  };

  const handleDeactivateDepartment = async (department) => {
    console.log("Deactivate :", department);
    // Backend API
    // PATCH
    fetchDepartments();
  };

  const filteredDepartments = departments.filter((department) =>
    department.departmentName
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="departments">

      {/* Header */}
      <div className="department-header">

        <div>
          <h1>Department Management</h1>
          <p>Create, update and manage organization departments.</p>
        </div>

        <button
          className="add-btn"
          onClick={handleAddDepartment}
        >
          + Add Department
        </button>

      </div>

      {/* Search */}

      <div className="department-search">

        <input
          type="text"
          placeholder="Search Department..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />

      </div>

      {/* Table */}

      <div className="department-table">

        <table>
          <thead>

            <tr>
              <th>Department</th>
              <th>Department Head</th>
              <th>Parent Department</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {filteredDepartments.length === 0 ? (

              <tr>
                <td
                  colSpan="5"
                  className="no-data"
                >
                  No Departments Found
                </td>
              </tr>
            ) : (

              filteredDepartments.map((department) => (

                <tr key={department._id}>
                  <td>{department.departmentName}</td>
                  <td>{department.departmentHead}</td>
                  <td>{department.parentDepartment}</td>
                  <td>{department.status}</td>
                  <td className="action-buttons">

                    <button
                      className="edit-btn"
                      onClick={() =>
                        handleEditDepartment(
                          department
                        )
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        handleDeactivateDepartment(
                          department
                        )
                      }
                    >
                      Deactivate
                    </button>

                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Popup */}

      <DepartmentForm
        isOpen={isModalOpen}
        onClose={() =>
          setIsModalOpen(false)
        }
        onSave={handleSaveDepartment}
        editDepartment={editDepartment}
      />
    </div>
  );
};
export default Departments;