import React from "react";
import { useState } from "react";
function ModifyCount(props){

  const handleInput=(event)=>{
    props.changeCount(parseInt(event.target.value))

  }
  return(
  <>
  <h1>child component</h1>
    <input type="number" onChange={handleInput} />
    <button onClick={props.increaseCount} className="py-2 px-4 rounded-lg bg-orange-500 text-white">Increase Count</button>
   
</>
   
  )

}


function ServicePage(){
  const[count,setCount]=useState(0)

  const increaseCount=()=>{
setCount(count+1)

  }
  const changeCount=(value)=>{
    setCount(value)
  }


    return(
        <div>
            <h1 className="font-bold text-5xl text-center">this is the service page</h1>
            <button onClick={increaseCount} className="py-2 px-4 rounded-lg bg-green-500 text-white">Increase from service</button>

            <div className="p-5 m-5 rounded-xl bg-indigo-400 text-white text-5xl text-center">
            {count}
      </div>
      <ModifyCount changeCount={changeCount} increaseCount={increaseCount}/>
      <ModifyCount changeCount={changeCount} increaseCount={increaseCount}/> 
       <ModifyCount changeCount={changeCount} increaseCount={increaseCount}/>
       <ModifyCount changeCount={changeCount} increaseCount={increaseCount}/>

 
</div>
       
    )
}

export default ServicePage;

// src/components/ServicePage.js

// import React from 'react';

// const ServicePage = () => {
//   const services = [
//     {
//       title: 'Web Development',
//       description: 'We create stunning and functional websites to help you stand out online.',
//       icon: '🌐'
//     },
//     {
//       title: 'Mobile App Development',
//       description: 'Our mobile apps are designed to provide a seamless experience on any device.',
//       icon: '📱'
//     },
//     {
//       title: 'SEO Optimization',
//       description: 'Improve your website’s visibility on search engines and attract more visitors.',
//       icon: '🔍'
//     },
//     {
//       title: 'Digital Marketing',
//       description: 'Effective strategies to promote your brand and reach your target audience.',
//       icon: '📈'
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
//       {/* Header */}
//       <header className="bg-blue-600 text-white w-full py-4">
//         <div className="container mx-auto text-center">
//           <h1 className="text-3xl font-bold">Our Services</h1>
//         </div>
//       </header>
      
//       {/* Main Content */}
//       <main className="flex-grow container mx-auto p-4">
//         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <div key={index} className="bg-white shadow-md rounded-lg p-6 text-center">
//               <div className="text-4xl mb-4">{service.icon}</div>
//               <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
//               <p className="text-gray-600">{service.description}</p>
//             </div>
//           ))}
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white w-full py-4 mt-auto">
//         <div className="container mx-auto text-center">
//           <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ServicePage;
