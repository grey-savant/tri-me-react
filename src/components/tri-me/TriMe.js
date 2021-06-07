import React, { useState, useContext} from 'react';
import { Triangle } from '../tri-me/geometry/triangle';
import AlertContext from '../../context/alert/alertContext';
//import { SET_ALERT } from '../../context/types';

const TriMe = () => {

    const alertContext = useContext(AlertContext);

    const [sideA, setA] = useState('');
    const [sideB, setB] = useState('');
    const [sideC, setC] = useState('');

    let triType = '';
    let triMsg = '';

        // Analyze Triangle
        const analyzeTriangle = (sideA, sideB, sideC) => {
            try {
                const triangle = new Triangle(sideA, sideB, sideC);
                triType = triangle.Type();
                triMsg = 'success';
            } catch (e) {
                triType = e.message;
                triMsg = 'error';
            }
        }
    

    const changeA = (e) => {
        setA(e.target.value);
    }

    const changeB = (e) => {
        setB(e.target.value);
    }

    const changeC = (e) => {
        setC(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if ((sideA === '') || (sideB === '') || (sideC === '')) {
            alertContext.setAlert(`Three values are needed to analyze the triangle.`, 'warning');
        } else {
            analyzeTriangle(sideA, sideB, sideC);
            alertContext.setAlert(triType, triMsg);
            setA('');
            setB('');
            setC('');
        }
    }

    return (
        <div className="panel">
            <h1>Tri Me!</h1>
            <p>Enter in three values to see what kind of triangle they create!</p>
            <p>Be careful what values you enter. They may not form a legitimate triangle.</p>
            <form onSubmit={onSubmit} className="form">
                <div className="section-grid">
                    <div className="card">
                        <p className="card-header">First Side</p>
                        <input type="text" className="form-control" name="sideA" value={sideA} onChange={changeA} />
                    </div>
                    <div className="card">
                        <p className="card-header">Second Side</p>
                        <input type="text" className="form-control" name="sideB" value={sideB} onChange={changeB} />
                    </div>
                    <div className="card">
                        <p className="card-header">Third Side</p>
                        <input type="text" className="form-control" name="sideC" value={sideC} onChange={changeC} />
                    </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Analyze My Triangle!" className="btn btn-blue" />
                </div>
            </form>
        </div>
    )
}

export default TriMe