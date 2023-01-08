import React from 'react'
import {Slider, SliderProps} from '@mui/material'
import shadows from "@mui/material/styles/shadows";

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 147,
                height:4,
                color: '#00CC22',
                '& .MuiSlider-thumb':{
                    width:'20px',
                    borderRadius:'10px',
                    background: 'white',
                    border: "1px solid #00CC22"
                },
                '& .MuiSlider-thumb:before':{
                    background: '#00CC22',
                    height:'6px',
                    width:'6px',
                    borderRadius:'3px',
                    boxShadow:'0 0',
                },
                '& .MuiSlider-rail':{
                    backgroundColor: '#8B8B8B',
                }
            }}
            value={props.value}
            onChange={props.onChange}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
