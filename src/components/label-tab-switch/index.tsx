import { LayoutGroup, motion } from 'framer-motion';
import shortid from 'shortid';
import React, { useState, useEffect } from 'react';



export interface BoilerplateLabelTabSwitchProps{

}


// export function LabelTabSwitch({ items = [], uid = shortid(), onChange, defaultIndex = 0, className = "px-2 py-1" }) {


//     const [index, setIndex] = useState(defaultIndex);

//     useEffect(() => {
//         onChange && onChange(index, items[index])
//     }, [index])


//     return (
//         <LayoutGroup id={uid}>
//             <div className="flex gap-2 w-max bg-gray-100 dark:bg-stone-600 rounded-full p-1 shadow-inner">
//                 {
//                     items.map((item, i) => {
//                         return (
//                             <div key={i} onClick={() => setIndex(i)} className={`${className} relative flex justify-center items-center cursor-pointer transition-all duration-300 ${ index == i ? 'text-blue-500 font-bold' : 'font-normal text-black/50 dark:text-white/50' }`}>
//                                 {index == i && <motion.div layout layoutId={`label-tab-switch`} className="w-full h-full bg-white dark:bg-stone-200 absolute z-[0] shadow rounded-full"></motion.div>}
//                                 <div className="z-[1]">{item}</div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </LayoutGroup>
//     )
// }