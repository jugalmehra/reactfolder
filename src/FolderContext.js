
import React,{useState, createContext} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const FolderContext = createContext();



export const Folderprovider = props => {

    const [selectedfolder, setSelectedfolder] = useState(null)

    const [folder, setFolder] = useState([
        {
            name: 'folder 1',
            id: uuidv4(),
            children: [
                {
                    name: 'folder 1.1',
                    id: uuidv4(),
                    children: [
                        {
                            name: 'folder 1.1.1',
                            id: uuidv4(),
                            children: [
                                {
                                    name: 'folder 1.1.1.1',
                                    id: uuidv4(),
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'folder 1.2',
                    id: uuidv4(),
                    children: []
                }
            ]
        },
        {
            name: 'folder 2',
            id: uuidv4(),
            children: [
                {
                    name: 'folder 2.1',
                    id: uuidv4(),
                    children: [] 
                }
            ]
        }
    ]);

    //for finding child folder to add
    const FindfoldertoADD = (folderlist, id, folderobject) => {
        const folderPosition = folderlist.find(el => {
            if(el.id === id){
                return el
            }

            if(el.children.length > 0){
                FindfoldertoADD(el.children, id, folderobject)
            }

            return undefined;
        });

        if(folderPosition){
            folderPosition.children.push(folderobject)

            setFolder([...folder])
        }
    }

    //for adding folder
    const Addfolder = (name) => {
        //alert(name)
        if(!selectedfolder){
            folder.push({
                name: name,
                id: uuidv4(),
                children: []
            })
            setFolder([...folder])
        }else{
            // alert('wait')
            FindfoldertoADD(folder, selectedfolder, {name: name,id:uuidv4(), children:[]} )
        }
    }

    //for selecting a folder
    const select = id => {
        // alert(id)
        setSelectedfolder(id)
    }

    //for unselecting a folder
    const unselect = () => {
        setSelectedfolder(null)
    }


    return(
        <>
            <FolderContext.Provider value={{folder, select, unselect, Addfolder, selectedfolder }}>
                {props.children}
            </FolderContext.Provider>
        </>
    );
}