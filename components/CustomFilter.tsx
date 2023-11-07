import React from 'react'
import { createContext } from 'react'
import { Fragment, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Listbox } from '@headlessui/react'
import { Transition } from '@headlessui/react'
import { CustomFilterProps } from '@/types'

const CustomFilter = ({title, options}: CustomFilterProps) => {
  return (
    <div className='w-fit'>
      {/* <Listbox>
        <div className='relative w-fit z-10'>
          <Listbox.Button className='custom-filter__btn'>
            <span>Filter</span>
          </Listbox.Button>
        </div>
      </Listbox> */}
    </div>
  )
}

export default CustomFilter