import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { OrangeButton } from 'components/CustomComponents/Buttons/Buttons';



const style=(theme) => ({
    root: {
        [theme.breakpoints.down('md')]: {
            width: '100px',
        }
    },
    width:'608px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius:"20px",
    boxShadow: 24,
    p: 4,
});

export default function BasicModal(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { children } = props;
    return (
        <>
        <OrangeButton color='primary' onClick={handleOpen}>Open modal</OrangeButton>
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                {children}
            </Box>
        </Modal>
        </>
    );
}
