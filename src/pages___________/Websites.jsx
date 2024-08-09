import React from 'react'
import { Link } from 'react-router-dom'

export default function Websites() {
  return (
      <div className='grid gap-4 mt-20 border-2 border-red-800 justify-center items-center' style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))' }}>
           <Link to='/?tab=website1' className='bg-slate-200 h-16 rounded-xl cursor-pointer flex justify-center items-center'>
            <h2>website 1</h2>
            </Link>
           <Link to='/?tab=website2' className='bg-slate-200 h-16 rounded-xl cursor-pointer flex justify-center items-center'>
            <h2>website 2</h2>
            </Link>
           <Link to='/?tab=website3' className='bg-slate-200 h-16 rounded-xl cursor-pointer flex justify-center items-center'>
            <h2>website 3</h2>
            </Link>
           <Link to='/?tab=website4' className='bg-slate-200 h-16 rounded-xl cursor-pointer flex justify-center items-center'>
            <h2>website 4</h2>
            </Link>
           <Link to='/?tab=website5' className='bg-slate-200 h-16 rounded-xl cursor-pointer flex justify-center items-center'>
            <h2>website 5</h2>
            </Link>
           <Link to='/?tab=website6' className='bg-slate-200 h-16 rounded-xl cursor-pointer flex justify-center items-center'>
            <h2>website 6</h2>
            </Link>
           <Link to='/?tab=website7' className='bg-slate-200 h-16 rounded-xl cursor-pointer flex justify-center items-center'>
            <h2>website 7</h2>
            </Link>
           <Link to='/?tab=website8' className='bg-slate-200 h-16 rounded-xl cursor-pointer flex justify-center items-center'>
            <h2>website 8</h2>
            </Link>
           <Link to='/?tab=website9' className='bg-slate-200 h-16 rounded-xl cursor-pointer flex justify-center items-center'>
            <h2>website 9</h2>
            </Link>
           <Link to='/?tab=website10' className='bg-slate-200 h-16 rounded-xl cursor-pointer flex justify-center items-center'>
            <h2>website 10</h2>
            </Link>
           <Link to='/?tab=website11' className='bg-slate-200 h-16 rounded-xl cursor-pointer flex justify-center items-center'>
            <h2>website 11</h2>
            </Link>
           <Link to='/?tab=website12' className='bg-slate-200 h-16 rounded-xl cursor-pointer flex justify-center items-center'>
            <h2>website 12</h2>
            </Link>
           <Link to='/?tab=website13' className='bg-slate-200 h-16 rounded-xl cursor-pointer flex justify-center items-center'>
            <h2>website 13</h2>
            </Link>
           <Link to='/?tab=website14' className='bg-slate-200 h-16 rounded-xl cursor-pointer flex justify-center items-center'>
            <h2>website 14</h2>
            </Link>
           <Link to='/?tab=website15' className='bg-slate-200 h-16 rounded-xl cursor-pointer flex justify-center items-center'>
            <h2>website 15</h2>
            </Link>
           <Link to='/?tab=website16' className='bg-slate-200 h-16 rounded-xl cursor-pointer flex justify-center items-center'>
            <h2>website 16</h2>
            </Link>
           <Link to='/?tab=website17' className='bg-slate-200 h-16 rounded-xl cursor-pointer flex justify-center items-center'>
              <h2>website 17</h2>
          </Link>
    </div>
  )
}
