import React from "react";



   function SightingList  () {
        let table = [];
       let children = [];

        for (let i = localStorage.length -1; i > -1  ; i--) {



                const item = JSON.parse(localStorage.getItem('"'+ i +'"'));
                const name =(<h1 className={'name'}>Name: {item.value.name}</h1>);
                const image =(<img src={item.value.img.base64} alt={'noimage'} />);
                const notes =(<p rows={'4'} cols={'50'} className={'notes'}>Notes: {item.value.notes}</p>);
                const rarity =(<p className={'rarity'}>Rarity: {item.value.rarity}</p>);
                const timestamp =(<p className={'timestamp'}>Timestamp: {item.time}</p>);
                const box = <div className={'newSightingBox'}>
                    <div className={'pic'}>
                    {image}
                    </div>

                    <div className={'info'}>
                   {name}
                   {notes}
                   {rarity}
                   {timestamp}
                    </div>
               </div>;
            children.push(box);

        }
       table.push(children);

        return <div className={'sightings'}>
             {table}
        </div>

   };


export default SightingList;