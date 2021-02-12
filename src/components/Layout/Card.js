import React from 'react';
import Group from '../../components/Icons/Group';
import Price from '../../components/Icons/Price';


const Card = props => {

    // const cardClasses = 'max-w-xs rounded overflow-hidden shadow-lg my-2';
    // const textClasses = ' text-center px-6 py-4';
    // const titleClasses = 'font-bold text-xl mb-2';
    // const iconsClasses = 'flex justify-evenly';
    // const priceClasses = '';
    
    const CardClasses = 'max-w-sm w-full sm:w-1/2 lg:w-1/3 py-6 px-3 ';
    const tamCardClasses = 'bg-white shadow-xl rounded-lg overflow-hidden';
    const imgClasses = 'bg-cover bg-center h-56';
    const titleClasses = 'uppercase tracking-wide text-sm font-bold text-gray-700'
    const iconSectionClasses = 'flex p-4 border-t border-gray-300 text-gray-700 justifyu-between';
    const iconClasses = 'flex-1 inline-flex items-center justify-evenly';
    const descriptionClasses = 'px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-200';
    const dTitleClasses = 'text-xs uppercase text-gray-600 tracking-wide';
    return (
        // <div className= { cardClasses }>
        //     <div className={imgClasses}>
        //     
        //     </div>
        //     {/* only the texts, icons, and button */}
        //     <div className={ textClasses }>
        //         <h3 className={ titleClasses }> { props.title } </h3>
        //         <p className='text-gray-400 text-base'>{ props.description }</p>
                
        //         <ul className={ iconsClasses }>
        //             <li className= 'flex items-center justify-between' >
                        
        //                 <Group />
        //                 <p> { props.people }  </p>   
        //             </li>
        //             <li className= 'flex items-center justify-evenly'>
        //             <Price/>
        //                 <p className={ priceClasses }> { props.price } </p> 
        //             </li>
                    
        //         </ul>
        //     </div>
        // </div>
        
        
        //Card Margins and responsive sizes
        <div className={CardClasses}>
            <div className= {tamCardClasses}>
                {/* Internal part of card */}
                <img className= {imgClasses} src={ props.imgUrl } alt={ props.altImg }/>
                <div className='p-4'>
                    <p className= {titleClasses}>{props.title}</p>
                    <p className= 'text-gray-700'>{props.address}</p>
                </div>
                <div className={iconSectionClasses}>
                    <div className={iconClasses}>
                        <Group />
                        <p>
                        <span className="text-gray-900 font-bold">{`  ${props.people}   `}</span>
                        Personas
                        </p>
                    </div>
                    <div className={iconClasses}>
                        <Price />
                        <p>
                        <span className="text-gray-900 font-bold">{`$  ${props.price}   `}</span>
                        
                        </p>
                    </div>
                </div>
                <div className={descriptionClasses}>
                    <div className={dTitleClasses}>
                        <p className= 'text-gray-700'>{props.description}</p>
                    </div>
                </div>

            </div>
        </div>
        

    );
}

export default Card;
