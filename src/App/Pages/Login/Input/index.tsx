import React from 'react'


type InputType = {
    changer: (data:string)=>void,
    placeholder: string,
    typeInput: string
}
export default function Input({changer, placeholder, typeInput}:InputType) {
  return (
    <div className="input-group flex-nowrap">
        <input onChange={(e)=>{changer(e.target.value)}} type={typeInput} className="form-control m-1" placeholder={placeholder} aria-label="Username" aria-describedby="addon-wrapping"/>
    </div>
  )
}
