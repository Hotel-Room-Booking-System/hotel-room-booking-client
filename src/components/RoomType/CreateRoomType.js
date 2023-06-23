import React, { useState } from "react";
import "quill/dist/quill.snow.css"; // Import Quill's styles
import ReactQuill from "react-quill"; // Import React-Quill
import "react-quill/dist/quill.snow.css"; // Import React-Quill's styles
import { useDispatch } from "react-redux";
import { addNewRoomType } from "./roomTypeSlice";
import { useNavigate } from "react-router-dom";

const CreateRoomType = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [facilities, setFacilities] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onNameChange = (e) => setName(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);
  const onPriceChange = (e) => setPrice(e.target.value);
  // const onFacilitiesChange = e => setFacilities(e.target.value)

  const canSave =
    [name, description, price, facilities].every(Boolean) &&
    addRequestStatus === "idle";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();

    if (canSave) {
      try {
        console.log("If can save");
        setAddRequestStatus("pending");

        dispatch(
          addNewRoomType({
            roomType: {
              name,
              description,
              price,
              facilities,
            },
          })
        ).unwrap();
      } catch (error) {
        console.log(error);
      } finally {
        setAddRequestStatus("idle");
      }

      setName("");
      setDescription("");
      setPrice("");
      setFacilities("");
      navigate("/admin/roomtypeTable");
    }

    console.log("Cansave: " + canSave);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="card px-4 mb-3">
              <form onSubmit={onSubmit}>
              <div className="row  my-3">
              <div className="col-md-6">
                  <label for="exampleInputEmail1" className="form-label">
                    Room Type
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="roomType"
                    value={name}
                    onChange={onNameChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label for="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    value={price}
                    onChange={onPriceChange}
                    required
                  />
                </div>
              </div>
               
                <div className="mb-3">
                  <label for="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    class="form-control"
                    rows="5"
                    id="comment"
                    name="text"
                    value={description}
                    onChange={onDescriptionChange}
                    required
                  ></textarea>
                </div>
             
                <div className="mb-3">
                  <label for="facilities" className="form-label">
                    Facilities
                  </label>

                  <ReactQuill
                    theme="snow"
                    value={facilities}
                    onChange={setFacilities}
                  />
                </div>
                <div className="mb-3 text-center">
                  <button type="submit" className="btn btn-primary">
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateRoomType;
