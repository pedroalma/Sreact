import './VoltaIndex.css'
import { useNavigate } from 'react-router-dom';
function VoltaIndex(){
    const navigate = useNavigate();

    const handleIndex = () => {
        return navigate("/");
    }
    return(
        <div>
            <button onClick={handleIndex}>Index</button>
        </div>
    )
}
export default VoltaIndex;