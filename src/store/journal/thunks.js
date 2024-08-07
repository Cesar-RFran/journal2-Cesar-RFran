import { collection, setDoc, doc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from './journalSlice';
import { loadNotes } from '../../helpers';

export const startNewNote = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewNote());

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        };

        const notesCollectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
        const newDocRef = doc(notesCollectionRef);
        await setDoc(newDocRef, newNote);

        newNote.id = newDocRef.id;

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        if (!uid) throw new Error('El UID del usuario no existe');

        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
};


 export const startSaveNote = () => {
    return async(dispatch, getState) => {

        dispatch(setSaving());

        const { uid } = getState().auth; 
        const { active:note } = getState().journal;

        const  noteToFireStore = {...note}
        delete noteToFireStore.id

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
        await setDoc(docRef, noteToFireStore, {merge: true})

        dispatch(updateNote(note))

    }

};

