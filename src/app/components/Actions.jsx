import Image from "next/image";
import { Button } from "antd";

const Actions = ({ showModal, user, editStudent, id }) => {
  return (
    <div className="actions mt-4">
      <span className="edit">
        <Image
          src="/images/icons/actions/edit.png"
          width={25}
          height={25}
          alt="edit"
          onClick={() => {
            editStudent(id);
          }}
        />
      </span>
      <span className="delete me-3">
        <Button
          type="auto"
          onClick={() => {
            showModal(user);
          }}
        >
          <Image
            src="/images/icons/actions/delete.png"
            width={25}
            height={25}
            alt="del"
          />
        </Button>
      </span>
    </div>
  );
};
export default Actions;
