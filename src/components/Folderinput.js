import React,{useState, useContext} from 'react';
import {FolderContext} from '../FolderContext';




const Folderinput = () => {

    const {Addfolder, unselect} = useContext(FolderContext);

    // for storing folder name
    const [foldername, setFoldername] = useState('')

    const addfoldername = async(e) => {
        setFoldername(e.target.value)
    }

    const handleonsubmit = event => {
        event.preventDefault();
        if(foldername.trim().length > 0){
            // alert("folder successfully added")
            Addfolder(foldername.trim())
        }else{
            alert("foldername cannot be empty")
        }

        setFoldername('')
    }

    const handleunselectAll = (e) => {
        unselect();
    }

    return(
        <div className="inputarea">
            <label>Add folder: </label><input type="text" name="foldername" value={foldername} onChange={addfoldername} placeholder="Enter Folder name" />
            <button onClick={handleonsubmit}>Add Folder</button><button onClick={handleunselectAll}>Unselect</button>
        </div>
    );
}


export default Folderinput;