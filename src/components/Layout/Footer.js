import React from 'react';

const Footer = () => {
    
    const footerClasses = 'bg-gray-800 pt-10 sm:mt-10 pt-10 flex justify-between';
    const columnsClasses = 'max-w-6xl m-2 text-gray-800 flex flex-wrap justify-between';
    const linkClasses = 'p-3 w-full sm:w-3/12 md:w-1/2';
    const colTitleClasses = 'text-xs  text-gray-400 font-medium mb-6';
    const nvClasses = 'my-1 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700';
    const socialMediaClasses = 'p-3 w-1/2 sm:w-4/12 md:w3/6';
    const smIconsClasses = '';

    return (
        <footer className={footerClasses}>
            {/* Links */}
            <div className={columnsClasses}>
                {/* NavBar/Pages */}
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
                <p className= {colTitleClasses}>LOGO TOFEST</p>
                <div className = {smIconsClasses}>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
