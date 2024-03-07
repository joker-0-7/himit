"use client";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Header from "../components/Headr";

const Notfications = () => {
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState("");

    useEffect(() => {
        const socket = io(process.env.NEXT_PUBLIC_API, { reconnection: true });
        return () => {
            socket.disconnect();
        };
    }, []);
    const sendNotfication = (e) => {
        e.preventDefault();
        const socket = io(process.env.NEXT_PUBLIC_API, { reconnection: true });
        socket.emit("message", currentMessage);
        setCurrentMessage("");
    };
    return (
        <div className="notfication">
            <div className="row">
                <div className="col-2">
                    <Nav />
                </div>
                <div className="col-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <Header />
                            </div>
                            <div className="col-12 content">
                                <div className="main-heading">
                                    <h1>الإشعارات</h1>
                                </div>
                                <form onSubmit={sendNotfication}>
                                    <input
                                        type="text"
                                        className="form-control w-50 mb-5"
                                        placeholder="العنوان"
                                        value={currentMessage}
                                        onChange={(e) =>
                                            setCurrentMessage(e.target.value)
                                        }
                                    />
                                    <button className="btn btn-dark">
                                        ارسال
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Notfications;
