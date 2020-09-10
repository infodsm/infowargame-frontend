import React from 'react';
import AskModal from '../common/AskModal';

const AskCheckModal = ({ visible, onConfirm, onCancel, onChange, onClick }) => {

    return (
        <AskModal visible={visible} conFirmText="닫기" onConfirm={onConfirm} onCancel={onCancel} onChange={onChange} onClick={onClick} />
    );
};

export default AskCheckModal;