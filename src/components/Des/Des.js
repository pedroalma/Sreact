import './Des.css';
function Des({img,no,des}) {
    return(
       <div className='the'>
            <div className="gta" >
                 <img src={img}/>
                  <h1>{no}</h1>
            </div>
        <h3>{des}</h3>
       </div>
    )
}
export default Des;