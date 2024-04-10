import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

interface AlertIProps {
    name: string;
    onClose: () => void;
}

export default function Alert({name, onClose}: AlertIProps) {
    return(
        <Dialog
        open={true}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogContent>
            {`Usunięto produkt o nazwie ${name}`}
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose}>Zamknij</Button>
        </DialogActions>
        </Dialog>
    );
}