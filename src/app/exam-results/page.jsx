"use client";
import { useEffect, useState } from "react";
import Header from "../components/Headr";
import Nav from "../components/Nav";
import Image from "next/image";
import axios from "axios";

const ExamResults = () => {
    const [users, setUsers] = useState([]);
    const [markers, setMarkers] = useState([]);
    const getData = async () => {
        try {
            const { data } = await axios.get(
                `${process.env.NEXT_PUBLIC_API}/users/students`
            );
            setUsers(data);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    // -------------------------------------------------------------------------------------------- //
    /* IF YOU NEED TO SEND MARKRES TO DATABASE WITH OUT USERS THEN YOU CALL IN IN SERVER SIDE WHITH REF TO USER
    // -------------------------------------------------------------------------------------------- //
    const handleChange = (e, userId) => {
        const { name, value } = e.target;
        const userIndex = markers.findIndex(
            (marker) => marker.userId === userId
        );
        if (userIndex === -1) {
            setMarkers((prevMarkers) => [
                ...prevMarkers,
                { userId, [name]: value },
            ]);
        } else {
            setMarkers((prevMarkers) => {
                const updatedMarkers = [...prevMarkers];
                updatedMarkers[userIndex] = {
                    userId,
                    ...updatedMarkers[userIndex],
                    [name]: value,
                };
                return updatedMarkers;
            });
        }};
    */
    // -------------------------------------------------------------------------------------------- //
    // IF YOU NEET TO SENT MARKERS WITH USERS AND SAVE IT IN USERS DATABASE WITH PROPERTY
    // -------------------------------------------------------------------------------------------- //
    const handleChange = (e, userId) => {
        const { name, value } = e.target;
        setUsers((prevUsers) => {
            return prevUsers.map((user) => {
                if (user._id === userId) {
                    const updatedMarkers = user.markers.map((marker) => {
                        if (marker.name === name) {
                            return {
                                ...marker,
                                value,
                            };
                        }
                        return marker;
                    });
                    if (!user.markers.some((marker) => marker.name === name)) {
                        updatedMarkers.push({ name, value });
                    }
                    return {
                        ...user,
                        markers: updatedMarkers,
                    };
                }
                return user;
            });
        });
    };
    // --------------------------------------------------------------------------------------------//
    return (
        <div className="exam-results">
            <div className="row">
                <div className="col-2">
                    <Nav />
                </div>
                <div className="col-10">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <Header />
                            </div>
                            <div className="col-12">
                                <div className="users mt-5">
                                    <table className="table table-borderless">
                                        <thead className="text-center">
                                            <tr>
                                                <th scope="col">الرقم</th>
                                                <th scope="col">اسم الطالب</th>
                                                <th scope="col">الشعبة</th>
                                                <th scope="col">الفرقة</th>
                                                <th scope="col">
                                                    الحالة الدراسية
                                                </th>
                                                <th scope="col">التخصص</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((student, index) => {
                                                return (
                                                    <tr key={student._id}>
                                                        <th scope="row">
                                                            {index + 1}
                                                        </th>

                                                        <td>
                                                            <div className="data">
                                                                <div className="name">
                                                                    {student.fristName +
                                                                        " " +
                                                                        student.lastName}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                className="form-control w-50 mx-auto"
                                                                name="one"
                                                                onChange={(e) =>
                                                                    handleChange(
                                                                        e,
                                                                        student._id
                                                                    )
                                                                }
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                className="form-control w-50 mx-auto"
                                                                name="tow"
                                                                onChange={(e) =>
                                                                    handleChange(
                                                                        e,
                                                                        student._id
                                                                    )
                                                                }
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                className="form-control w-50 mx-auto"
                                                                name="three"
                                                                onChange={(e) =>
                                                                    handleChange(
                                                                        e,
                                                                        student._id
                                                                    )
                                                                }
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                className="form-control w-50 mx-auto"
                                                                name="four"
                                                                onChange={(e) =>
                                                                    handleChange(
                                                                        e,
                                                                        student._id
                                                                    )
                                                                }
                                                            />
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ExamResults;
