"use client";
import { UserContext } from "@/app/context/userContext";
import { Modal, Button } from "antd";
import axios from "axios";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
const ChangePassword = ({ isModalOpen, setIsModalOpen }) => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordR, setNewPasswordR] = useState("");
    const [state, setState] = useContext(UserContext);

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleSubmit = async () => {
        if (newPassword !== newPasswordR) {
            toast.error("كلمة السر الجديدة لا تشابه تأكيدها");
        } else {
            try {
                const data = await axios.post(
                    `${process.env.NEXT_PUBLIC_API}/users/update-password/${state.user._id}`,
                    { oldPassword, newPassword }
                );
                toast.success(data.data.msg);
                setNewPasswordR("");
                setOldPassword("");
                setNewPassword("");
                setIsModalOpen(false);
            } catch (error) {
                toast.error(error.response.data.msg);
                setNewPasswordR("");
                setOldPassword("");
                setNewPassword("");
            }
        }
    };
    return (
        <div className="change-password">
            <Modal
                width={550}
                title="تغيير الباسورد"
                open={isModalOpen}
                onOk={handleSubmit}
                onCancel={handleCancel}
                okText="تأكيد"
                cancelText="الغاء"
            >
                <p>
                    يجب أن تتكون كلمة المرور الخاصة بك من 6 أحرف على الأقل ويجب
                    أن تتضمن مجموعة من الأرقام والحروف والأحرف الخاصة (!$@%).
                </p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        className="form-control mb-4"
                        placeholder="كلمة السر القديمة"
                        onChange={(e) => setOldPassword(e.target.value)}
                        value={oldPassword}
                    />
                    <input
                        type="password"
                        className="form-control mb-4"
                        placeholder="كلمة السر الجديدة"
                        onChange={(e) => setNewPassword(e.target.value)}
                        value={newPassword}
                    />
                    <input
                        type="password"
                        className="form-control mb-4"
                        placeholder="تأكيد كلمة السر الجديدة"
                        onChange={(e) => setNewPasswordR(e.target.value)}
                        value={newPasswordR}
                    />
                </form>
            </Modal>
        </div>
    );
};
export default ChangePassword;
