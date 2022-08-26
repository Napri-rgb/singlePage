import React from "react";
import moment from "moment";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const dummydata = [
  {
    _id: "1",
    datasetname: "Dataset 1",
    records: 1025,
    createdat: moment().format("MMMM Do YYYY, h:mm:ss a"),
  },
  {
    _id: "2",
    datasetname: "Dataset 2",
    records: 1026,
    createdat: moment().format("MMMM Do YYYY, h:mm:ss a"),
  },
  {
    _id: "3",
    datasetname: "Dataset 3",
    records: 1027,
    createdat: moment().format("MMMM Do YYYY, h:mm:ss a"),
  },
  {
    _id: "4",
    datasetname: "Dataset 4",
    records: 1028,
    createdat: moment().format("MMMM Do YYYY, h:mm:ss a"),
  },
];

function List() {
  const [data, setData] = React.useState(dummydata);
  const deleteItem = (id) => {
    console.log(typeof id);
    setData(data.filter((item) => item._id !== id));
  };
  return (
    <div
      style={{
        display: "flex",

        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {data.map((item) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            height: "15vh",
            width: "90%",
            margin: "auto",
            backgroundColor: "white",
            marginTop: "1vh",
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              marginLeft: "2vh",
            }}
          >
            {item.datasetname}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "25%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h4>Records</h4>
              <p>{item.records}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h4>Created At</h4>
              <p>{item.createdat}</p>
            </div>
          </div>
          <div
            style={{
              marginRight: "2vh",
              width: 100,
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <DeleteForeverIcon
              onClick={() => {
                deleteItem(item._id);
              }}
            />

            <BorderColorIcon />
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
