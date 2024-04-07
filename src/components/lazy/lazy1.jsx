import React from 'react'
// import img from '../../images/image.jpg'
const Lazy1 = (props) => {
    return(
        <div>
            {console.log("Загружено")}
            <h3>Компонент с отложенной загрузкой</h3>
            {/* <img src={img} style={{ width: '60px' }} /> */}
        </div>
    )
}
export default Lazy1;
