import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Register from '../Register/Register';
import "./Modal.scss"


const ModalRegis = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
       Register Now! 
      </Button>
      <Modal title="" open={isModalOpen}footer={null} 
     onCancel={handleCancel}>
        <Register setModal={setIsModalOpen}/>
      </Modal>
    </>
  );
};
export default ModalRegis;  