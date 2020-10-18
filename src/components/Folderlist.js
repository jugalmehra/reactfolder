import React,{useState, useContext} from 'react';
import {FolderContext} from '../FolderContext';

const Folderlist = () => {

    const {folder, select, unselect, selectedfolder } = useContext(FolderContext);

    //solid folder for folder with child and holow folder for folder without child
    
    const Createfolderlist = (folderlist) => {
      let structure =  folderlist.map( el => {
            if(el.children.length > 0){
                return(
                    <>
                        <ul key={el.id}>
                            <li>                                                                                                                                                                   
                                <div className={[selectedfolder === el.id ? 'active' : '', 'singlelist'].join(' ')} onClick={() => select(el.id)} > <i class="material-icons">folder</i> {el.name} </div>
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
                                <div className={[selectedfolder === el.id ? 'active' : '', 'singlelist'].join(' ')} onClick={() => select(el.id)} > <i class="material-icons">folder_open</i>  {el.name} </div>
                            </li>

                        </ul>
                    </>
                );
            }
        })
        return structure;
    }



    return(
        <div className="listarea">
            {Createfolderlist(folder)}

        </div>

    );
}

export default Folderlist;