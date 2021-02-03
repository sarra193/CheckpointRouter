import React from 'react'
import './Rate.css'
function Rate({ count, value, inactiveColor = '#ddd', size = 24, activeColor = 'red', onChange }) {

            const stars = Array.from({ length: count }, () => '🟊')
            
      const handleChange = (value) => {
            onChange(value+1)
      }

      return (
            <div className="rating">
                  {stars.map((s,i) => {
                        let style = inactiveColor;
                        if (i < value) {
                        style=activeColor   
                        }
                        return (
                              <span className={"star"} key={i}
                              style={{color:style,width:size,fontSize:size,height:size}}
                              onClick={()=>handleChange(i)}>{s}

                              </span>
                        )
                  })}
                  ({value})
            </div>
      )
}

export default Rate
