import React, {useState} from 'react'

export default function SwitchTheme() {
       const [color,setColor] = useState(true)
       const colorChange = () => {
            setColor(!color)
       }

  return (
    <div>
      <div style={{ backgroundColor: color ? 'black' : 'white', height:'200px', width:'200px'}}>
        <button onClick={colorChange} style={{height:'100px', width:'100px', borderRadius: '50px', marginTop: '40px', marginLeft:'20px'}}>Switch theme</button>
      </div>
    </div>
  )
}
