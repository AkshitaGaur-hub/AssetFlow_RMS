import React, { useEffect, useState } from "react";
import "../admin_css/DepartmentForm.css";

const DepartmentForm = ({ isOpen, onClose, onSave, editDepartment, }) => {
    const initialState = {
        departmentName: "",
        departmentHead: "",
        parentDepartment: "",
        status: "Active",
    };

    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        if (editDepartment) {
            setFormData(editDepartment);
        } else {
            setFormData(initialState);
        }
    }, [editDepartment]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    if (!isOpen) return null;

    return (
        <div className="department-modal">
            <div className="department-modal-content">
                <div className="department-modal-header">
                    <h2>
                        {editDepartment ? "Edit Department" : "Add Department"}
                    </h2>

                    <button
                        className="close-btn"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>Department Name</label>
                        <input
                            type="text"
                            name="departmentName"
                            placeholder="Enter Department Name"
                            value={formData.departmentName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Department Head</label>
                        <select
                            name="departmentHead"
                            value={formData.departmentHead}
                            onChange={handleChange}
                        >
                            <option value="">Select Department Head</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Parent Department</label>
                        <select
                            name="parentDepartment"
                            value={formData.parentDepartment}
                            onChange={handleChange}
                        >
                            <option value="">None</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Status</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>

                    <div className="form-buttons">
                        <button
                            type="button"
                            className="cancel-btn"
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="save-btn"
                        >
                            {editDepartment ? "Update Department" : "Save Department"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default DepartmentForm;