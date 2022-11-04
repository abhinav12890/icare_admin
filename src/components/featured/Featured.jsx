import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { db } from "../../firebase";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
const Featured = () => {
  const [info, setInfo] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getInfo = async () => {
      const data = await getDocs(
        collection(db, `admin/form/${currentUser.displayName}`)
      );
      setInfo(data.docs.map((doc) => ({ ...doc.data() })));
    };
    getInfo();
  }, []);
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Personal Info</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
      <div className="user1">
              {info.map((info) => {
                return (
                  <div>
                    {""}
                    <h1> Name : {info.Name}</h1>
                    <h1> Specialization : {info.Specialization}</h1>
                    <h1> Gender : {info.Gender}</h1>
                    <h1> Age : {info.AGE}</h1>
                    <h1> Phone : {info.phone}</h1>
                    <h1> Country : {info.Country}</h1>
                  </div>
                );
              })}
            </div>
      </div>
    </div>
  );
};

export default Featured;
