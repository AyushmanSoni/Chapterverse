import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader/Loader';
import axios from 'axios';
import { AiFillDelete } from 'react-icons/ai';
// import { FaRupeeSign } from 'react-icons/fa';
import { FaIndianRupeeSign } from "react-icons/fa6";

const Cart = () => {
  const [Cart, setCart] = useState([]);
  const [Total, setTotal] = useState(0);
  const headers = {
    id: localStorage.getItem('id'),
    authorization: `Bearer ${localStorage.getItem('token')}`,
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          "http://localhost:1000/api/v1/get-user-cart", { headers }
        );
        setCart(res.data.data);
        // Calculate the total
        let total = 0;
        res.data.data.forEach(item => {
          total += item.price;
        });
        setTotal(total);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };
    fetch();
  }, [Cart]); // Run the effect only once

  // const deleteItem = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:1000/api/v1/remove-from-cart/${id}`, { headers });
  //     setCart(Cart.filter(item => item._id !== id));
  //     setTotal(Total - Cart.find(item => item._id === id).price);
  //   } catch (error) {
  //     console.error('Failed to delete item:', error);
  //   }
  // };
  const deleteItem = async (bookid) => {
    const response = await axios.put(`http://localhost:1000/api/v1/remove-from-cart/${bookid}`,{}, { headers }
    );
    alert(response.data.message);
  };
  return (
    <div className='bg-[#F3F8F9] px-12 h-screen py-8'>
      {!Cart.length && <Loader />}
      {Cart.length === 0 && (
        <div className='h-screen'>
          <div className='h-[100%] flex items-center justify-center flex-col'>
            <h1 className='text-5xl lg:text-6xl font-semibold text-zinc-400'>Empty Cart</h1>
            <img src="" alt="" className='lg:h-[50vh]' />
          </div>
        </div>
      )}
      {Cart.length > 0 && (
        <>
          <h1 className='text-3xl font-semibold text-[#086D8A]'>Your Cart</h1>
          {Cart.map((item, i) => (
            <div className='w-full my-4 rounded flex flex-col md:flex-row p-4 bg-white border  border-[#086D8A] justify-between items-center'
              key={i}>
              <img src={item.url} alt="/" className='h-[20vh] md:h-[10vh] object-cover' />
              <div className='w-full md:w-auto'>
                <h1 className='text-2xl text-[#086D8A] font-semibold text-start mt-2 md:mt-0'>{item.title}</h1>
                <p className='text-normal text-zinc-700 mt-2 hidden lg:block'>{item.desc.slice(0, 100)}...</p>
                <p className='text-normal text-zinc-700 mt-2 hidden md:block lg:hidden'>{item.desc.slice(0, 65)}...</p>
                <p className='text-normal text-zinc-700 mt-2 md:hidden block'>{item.desc.slice(0, 100)}...</p>
              </div>
              <div className='flex mt-4 w-full md:w-auto items-center justify-between'>
              <p className=' text-[#032B37] text-3xl font-semibold flex items-center'>
                <FaIndianRupeeSign className='' /> {item.price}
                </p>
                <button className='bg-red-100 text-red-700 border border-red-700 rounded p-2 ms-12'
                  onClick={() => deleteItem(item._id)}
                ><AiFillDelete /></button>
              </div>
            </div>
          ))}
          <div className='w-full flex justify-end p-4'>
            <h2 className='text-zinc-100 text-3xl font-semibold'>Total: {Total}</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
