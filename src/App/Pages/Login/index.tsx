import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import logo from "../../Imgs/myvillage.png"
import Input from './Input'
import "./style.sass"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  return (
    <div className='LoginPage'>
        <div className='left'>
            <div className='container about'>
                <img src={logo} alt="Logotipo"/>
                <h2>
                    <span className='green'>Seja bem</span>
                    <span className='blue'> vindo!</span>
                </h2>
                <p>
                    <Typewriter options={{loop: true}} onInit={(typewriter)=>{
                        typewriter
                        .changeDelay(5)
                        .typeString("Efetue seu login para ter acesso as funcionalidades do Myvillage.")
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("Ainda não é cadastrado? Solicite seu cadastro com o responsavel.")
                        .start()
                        .pauseFor(2000)
                        
                    }} />
                </p>


                    <button className='btn Help btn-success'>
                        <i className="bi bi-info-circle-fill"></i>
                        <span>Precisa de ajuda?</span>
                    </button>
            </div>

        </div>
        <div className='right'>
            <span className='Version'>Versão: 0.0.2</span>
            <form className='formulary flex-shrink-1'>
                <h3>Faça seu login para entrar</h3>
                <Input changer={setEmail} typeInput="email" placeholder='Digite seu email!'/>
                <Input changer={setEmail} typeInput="password" placeholder='Digite a sua senha!'/>
                <button type="button" className="btn btn-primary m-1" style={{"width":"100%"}}>
                    Entrar na conta
                </button>

            </form>
        </div>
    </div>
  )
}
