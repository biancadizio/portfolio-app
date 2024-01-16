import React from 'react';
import ruiva2 from '../Images/ruiva2.png';

const Image = () => {
    return (
        <div>
        <img src={ruiva2} alt="Descrição da imagem" style={{ width: '20%', height: '30%', borderRadius: '50px' }} />
        </div>
    );
    }

export default Image;