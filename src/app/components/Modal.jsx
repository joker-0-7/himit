import { Modal } from "antd";
const ModalCopmonent = ({ name, handleDelete, open, hideModal, page }) => {
    return (
        <Modal
            title={
                page === "doctor"
                    ? "حذف الدكتور"
                    : page === "الجدول"
                    ? "حذف الجدول"
                    : "حذف الطالب"
            }
            open={open}
            onOk={handleDelete}
            onCancel={hideModal}
            okText="حذف"
            cancelText="الغاء"
            style={{
                marginTop: "20vh",
                height: " 215px",
                width: "550px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                borderRadius: "12px",
            }}
        >
            {page === "doctor" ? (
                <h5>هل انت متاكد من حذف الدكتور {name && name}؟</h5>
            ) : page === "الجدول" ? (
                <h5>هل انت متأكد من حذف الجدول ؟</h5>
            ) : (
                <h5>هل انت متأكد من حذف الطالب ؟</h5>
            )}
        </Modal>
    );
};
export default ModalCopmonent;
