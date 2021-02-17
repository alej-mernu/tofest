import React from 'react';
import {IG, FB, TT, PS, WEB} from '../Icons/SocialMedia';
const Footer = () => {
    
    const footerClasses = 'bg-gray-800 pt-2 sm:mt-1 pt-1 flex';
    const columnsClasses = 'w-full m-2 text-gray-800 flex justify-between';
    const linkClasses = 'p-3 pr-8';
    const colTitleClasses = 'text-xs  text-gray-400 font-medium mb-6';
    const nvClasses = 'my-1 block text-md text-gray-300 hover:text-gray-100 text-sm font-medium duration-700';
    const socialMediaClasses = 'justify-items-end p-3 sm:w-4/12 md:w-4/12 lg:w-5/12';
    const smIconsClasses = 'flex justify-center';
    const textClasses = 'italic p-2 pl-6 text-white';

    return (
        <footer>
            <div className= {footerClasses} >
                {/* Links */}
                <div className={columnsClasses}>
                    {/* NavBar/Pages */}
                    <div className='flex justify-evenly'>
                        <div className= {linkClasses}>
                            <div className= {colTitleClasses}>
                                <a href= '/'>ToFest.com</a>
                            </div>
                            <a href= '/' className={nvClasses}>Inicio</a>
                            <a href= '/' className={nvClasses}>Nosotros</a>
                            <a href= '/' className={nvClasses}>Terrrazas</a>
                            <a href= '/' className={nvClasses}>Perfil</a>
                        </div>
                        {/* Support */}
                        <div className= {linkClasses}>
                            <div className= {colTitleClasses}>
                                <a href= '/'>Soporte</a>
                            </div>
                            <a href= '/' className={nvClasses}>Contacto</a>
                            <a href= '/' className={nvClasses}>Preguntas Frecuentes</a>
                            <a href= '/' className={nvClasses}>Terminos y Condiciones</a>
                            <a href= '/' className={nvClasses}>Politicas de Privacidad</a>
                        </div>
                    </div>
                    {/* Social Media */}
                    <div className={socialMediaClasses}>
                        <img className='flex justify-end m-auto' src='/logos/logo.png' alt='logo' width= {420}/>
                        <p className= ' text-lg text-center p-1 pl-6 text-white'>correocontacto@correo.com</p>
                        <div className = {smIconsClasses}>
                            <FB  class='m-1 p-1'/>
                            <PS  class='m-1 p-1'/>
                            <IG  class='m-1 p-1'/>
                            <TT  class='m-1 p-1'/>
                            <WEB class='m-1 p-1' />
                        </div>
                    </div>
                </div>
            </div>    
            <div className= 'bg-gray-700 flex justify-between'>   
                <p className={textClasses}>2021 | www.ToFest.com - Todos los derechos reservados</p>
                <p className={textClasses}>Actualizacion a dia 16/02/2021</p>
            </div>
            
        </footer>
    );
}

export default Footer;
