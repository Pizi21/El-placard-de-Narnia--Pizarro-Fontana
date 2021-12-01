
import React ,{useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

//react dom
import { Link } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([]);
    console.log("State",detail)

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
           .then((response)=> response.json ())
           .then((json)=> setDetail(json))
    }, []);


    return (
        <div>
            <div className='CharacterList-container'>
      {detail.map((det) => {
        // console.log('id', det.det_id);
        return (
          <div key={det.det_id}>
            <Link to={`/detail/${det.det_id}`}>
              <ItemDetail data={det} />
            </Link>
          </div>
        );
      })}
    </div>
            
        </div>
    )
}

export default ItemDetailContainer
