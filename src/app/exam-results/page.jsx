"use client";
import { useEffect, useState } from "react";
import Header from "../components/Headr";
import Nav from "../components/Nav";
import axios from "axios";
import Filter from "../components/Filter";
const ExamResults = () => {
    const [users, setUsers] = useState([]);
    const [section, setSection] = useState("");
    const [squad, setSquad] = useState("");
    const [subject, setSubject] = useState([]);
    const [feildCount, setFeildCount] = useState([1]);
    const [type, setType] = useState();
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
    const addField = () => {
        setFeildCount((prevFeildCount) => [
            ...prevFeildCount,
            prevFeildCount.length + 1,
        ]);
    };
    const addSubject = (e, index) => {
        const updatedSubject = [...subject];
        updatedSubject[index] = e.target.value;
        setSubject(updatedSubject);
        console.log(updatedSubject);
    };
    const delField = () => {
        if (feildCount.length > 1) {
            setFeildCount((prevFeildCount) => [
                ...feildCount.slice(0, feildCount.length - 1),
            ]);
        }
    };
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
                                    <div className="row">
                                        <Filter
                                            setSection={(e) =>
                                                setSection(e.target.value)
                                            }
                                            setSquad={(e) =>
                                                setSquad(e.target.value)
                                            }
                                        />
                                        <div className="inputs col-4">
                                            <div className="row">
                                                <div className="col-4 form-check d-flex justify-content-around">
                                                    <input
                                                        type="radio"
                                                        name="type-exam"
                                                        className="form-check-input float-none"
                                                        id="one"
                                                        onChange={(e) => {
                                                            setType(
                                                                e.target.value
                                                            );
                                                        }}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="one"
                                                    >
                                                        ميد ترم
                                                    </label>
                                                </div>
                                                <div className="col-4 form-check d-flex justify-content-around">
                                                    <input
                                                        type="radio"
                                                        name="type-exam"
                                                        className="form-check-input float-none"
                                                        id="two"
                                                        onChange={(e) => {
                                                            setType(
                                                                e.target.value
                                                            );
                                                        }}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="two"
                                                    >
                                                        فاينال
                                                    </label>
                                                </div>
                                                <div className="col-4 form-check d-flex justify-content-around">
                                                    <input
                                                        type="radio"
                                                        name="type-exam"
                                                        className="form-check-input float-none"
                                                        id="three"
                                                        onChange={(e) => {
                                                            setType(
                                                                e.target.value
                                                            );
                                                        }}
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="three"
                                                    >
                                                        تخلفات
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <table className="table table-borderless">
                                        <thead className="text-center">
                                            <tr>
                                                <th scope="col">الرقم</th>
                                                <th scope="col">اسم الطالب</th>
                                                {feildCount.map((ele, i) => {
                                                    return (
                                                        <th scope="col" key={i}>
                                                            <input
                                                                className="form-control w-50 mx-auto"
                                                                type="text"
                                                                placeholder="اسم الماده"
                                                                onChange={(e) =>
                                                                    addSubject(
                                                                        e,
                                                                        i
                                                                    )
                                                                }
                                                            />
                                                        </th>
                                                    );
                                                })}
                                                <th
                                                    scope="col"
                                                    onClick={addField}
                                                >
                                                    <span className="btn btn-dark">
                                                        +
                                                    </span>
                                                </th>
                                                <th
                                                    scope="col"
                                                    onClick={delField}
                                                >
                                                    <span className="btn btn-danger">
                                                        x
                                                    </span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((student, index) => {
                                                return (
                                                    <>
                                                        <tr key={student._id}>
                                                            <th scope="row">
                                                                {index + 1}
                                                            </th>
                                                            <td>
                                                                <div className="data">
                                                                    <div className="name">
                                                                        {`${student.fristName} ${student.lastName}`}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            {feildCount.map(
                                                                (
                                                                    ele,
                                                                    index
                                                                ) => {
                                                                    return (
                                                                        <>
                                                                            <td
                                                                                key={
                                                                                    index
                                                                                }
                                                                            >
                                                                                <input
                                                                                    type="text"
                                                                                    placeholder="النتيجة"
                                                                                    className="form-control w-50 mx-auto"
                                                                                    name={
                                                                                        subject[
                                                                                            index
                                                                                        ]
                                                                                    }
                                                                                    onChange={(
                                                                                        e
                                                                                    ) =>
                                                                                        handleChange(
                                                                                            e,
                                                                                            student._id
                                                                                        )
                                                                                    }
                                                                                />
                                                                            </td>
                                                                        </>
                                                                    );
                                                                }
                                                            )}
                                                        </tr>
                                                    </>
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
