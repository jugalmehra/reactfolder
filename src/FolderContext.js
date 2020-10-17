import React,{useState, createContext} from 'react';

export const FolderContext = createContext();



export const Folderprovider = props => {

    const [folder, setFolder] = useState([
        {
            name: 'folder 1',
            id: 1001,
            children: [
                {
                    name: 'folder 1.1',
                    id: 10011,
                    children: [
                        {
                            name: 'folder 1.1.1',
                            id: 100111,
                            children: [
                                {
                                    name: 'folder 1.1.1.1',
                                    id: 1001111,
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'folder 1.2',
                    id: 10012,
                    children: []
                }
            ]
        },
        {
            name: 'folder 2',
            id: 1002,
            children: [
                {
                    name: 'folder 2.1',
                    id: 10021,
                    children: [] 
                }
            ]
        }
    ]);


    return(
        <>
            <FolderContext.Provider value={[folder, setFolder]}>
                {props.children}
            </FolderContext.Provider>
        </>
    );
}