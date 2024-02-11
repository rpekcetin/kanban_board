import React, { useState } from 'react'
import TaskCard from '../../components/TaskCard'
import { PlusIcon } from '@heroicons/react/24/outline'
import Modal from '../../components/Modal'
import Input from '../../components/Input'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { NavigateFunction, useNavigate } from 'react-router-dom'

interface IFormik {
  name: string
}

const index = () => {
  const [modal, setModal] = useState<boolean>(false)
  const navigation: NavigateFunction = useNavigate()
  const validationSchema: any = Yup.object({
    name: Yup.string().required('Lütfen ad giriniz!')
  })
  const formik = useFormik<IFormik>({
    initialValues: {
      name: ''
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })
  console.log(formik.errors.name)
  console.log(formik.touched.name)
  return (
    <div className="grid mr-5 gap-4 grid-cols-5">
      <div className='cursor-pointer' onClick={() => setModal(!modal)}>
        <TaskCard>
          <div className='flex gap-2 items-center justify-center w-full h-full text-center mt-5 mb-10'>
            <label className='cursor-pointer text-lg font-bold'>
              Yeni Panel Ekle
            </label>
            <PlusIcon className='h-6 w-6' />
          </div>
        </TaskCard>
      </div>
      <div className='cursor-pointer' onClick={() => navigation(`/${1}`)}>
        <TaskCard>
          <div className='w-full h-full text-center mt-5 mb-10'>
            <label className='cursor-pointer text-center text-lg font-bold uppercase'>
              Test
            </label>
          </div>
        </TaskCard>
      </div>
      <Modal
        title='Yeni Panel Ekle'
        modal={modal}
        setModal={setModal}
        successTitle='Ekle'
        onSubmit={formik.handleSubmit}
      >
        <div className=' p-6 mx-16'>
          <Input label='Ad Giriniz' name='name' invalid={formik.errors.name ? true : false && formik.touched.name} error={formik.errors.name} onChange={formik.handleChange} />
        </div>
      </Modal>
    </div >
  )
}

export default index