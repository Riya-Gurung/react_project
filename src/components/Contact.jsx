import React from "react";
import { useState } from "react";
import { useContext ,createContext} from "react";
import ContactDetails from "./ContactDetails";

export const contactContext=createContext(null)

function Contact(){

  const [contactData,setContactData]=useState({
    name:"RIYA Innovation",
    email:"riya123@gmail.com.np",
    phone:["+9779825679","+9779806085412"],
    address:"USA"

  })
    return(
        <contactContext.Provider value={{contactData}}>
            <h1 >Contacts </h1>
            <ContactDetails />

        </contactContext.Provider>
    )
}
export default Contact;

// // src/components/ContactPage.js

// import React from 'react';

// const ContactPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
//       {/* Header */}
//       <header className="bg-blue-600 text-white w-full py-4">
//         <div className="container mx-auto text-center">
//           <h1 className="text-3xl font-bold">Contact Us</h1>
//         </div>
//       </header>
      
//       {/* Main Content */}
//       <main className="flex-grow container mx-auto p-4">
//         <section className="bg-white shadow-md rounded-lg p-6 mb-8">
//           <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
//           <form action="#" method="post" className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows="4"
//                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                 required
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
//             >
//               Send Message
//             </button>
//           </form>
//         </section>

//         <section className="bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-2xl font-semibold mb-4">Contact Details</h2>
//           <p className="text-lg mb-4">
//             For any inquiries or support, please reach out to us using the following contact details:
//           </p>
//           <address className="text-lg">
//             <p>Email: <a href="mailto:contact@example.com" className="text-blue-500 hover:underline">contact@example.com</a></p>
//             <p>Phone: <a href="tel:+1234567890" className="text-blue-500 hover:underline">+1 (234) 567-890</a></p>
//             <p>Address: 123 Example Street, Example City, EX 12345</p>
//           </address>
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

// export default ContactPage;
