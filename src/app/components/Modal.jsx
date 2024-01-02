import { Modal } from "antd";

const ModalCopmonent = ({ name, handleDelete, open, hideModal, page }) => {
  return (
    <Modal
      title={page === "doctor" ? "حذف الدكتور" : "حذف الطالب"}
      open={open}
      onOk={handleDelete}
      onCancel={hideModal}
      okText="حذف"
      cancelText="الغاء"
    >
      {page === "doctor" ? (
        <h5>هل انت متاكد من حذف الدكتور {name}؟</h5>
      ) : (
        <h5>هل انت متأكد من حذف الطالب ؟</h5>
      )}
    </Modal>
  );
};
export default ModalCopmonent;
