import React,{useState, useContext} from 'react';
import {FolderContext} from '../FolderContext';

const Folderlist = () => {

    const [folderlist] = useContext(FolderContext);

    
    const Createfolderlist = (folderlist) => {
      let structure =  folderlist.map( el => {
            if(el.children.length > 0){
                return(
                    <>
                        <ul key={el.id}>
                            <li>
                                <div className="singlelist"> {el.name} </div>
                                <> {Createfolderlist(el.children)} </>
                            </li>
                        </ul>
                    </>
                );
            }
            else{
                return(
                    <>
                        <ul key={el.id}>
                            <li>
                                <div className="singlelist"> {el.name} </div>
                            </li>

                        </ul>
                    </>
                );
            }
        })
        return structure;
    }



    return(
        <div>
            {Createfolderlist(folderlist)}

        </div>

    );
}

export default Folderlist;