import { useEffect, useState } from 'react'
import TaskCard from '../../components/TaskCard'
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import Modal from '../../components/Modal'
import Input from '../../components/Input'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { PanelTypes } from './store/types'
import { ISelectorType } from '../../types/types'
import { IPanel, IPanelValidation } from './types/types'

const index = () => {
  const [modal, setModal] = useState<boolean>(false)
  const dispatch: Dispatch<any> = useDispatch()
  const navigation: NavigateFunction = useNavigate()
  const { panels } = useSelector((state: ISelectorType) => state.PanelSlice)

  useEffect(() => {
    dispatch({
      type: PanelTypes.GET_PANELS
    })
  }, [0])

  const validationSchema = Yup.object({
    name: Yup.string().required('Lütfen ad giriniz!')
  })

  const formik = useFormik<IPanelValidation>({
    initialValues: {
      name: ''
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch({
        type: PanelTypes.POST_PANELS,
        payload: {
          name: values.name
        }
      })
      formik.resetForm()
      setModal(!modal)
    }
  })

  const handleDelete = (_id: string) => {
    dispatch({
      type: PanelTypes.DELETE_PANELS,
      payload: {
        _id
      }
    })
  }

  return (
    <div className="grid mr-5 gap-4 grid-cols-5">
      <div className='cursor-pointer' onClick={() => setModal(!modal)}>
        <TaskCard>
          <div className='flex gap-2 items-center justify-center w-full h-full text-center pt-10 pb-10'>
            <label className='cursor-pointer text-lg font-bold'>
              Yeni Panel Ekle
            </label>
            <PlusIcon className='h-6 w-6' />
          </div>
        </TaskCard>
      </div>
      {
        panels?.map((data: IPanel, index: number) => (
          <div className='cursor-pointer' key={`panel-card-${index}`}>
            <TaskCard>
              <TrashIcon onClick={() => handleDelete(data._id)} className='h-5 w-5 absolute stroke-red-500 top-3 right-3 cursor-pointer z-2' />
              <div onClick={() => navigation(`/${data._id}`)} className='w-full h-full text-center pt-10 pb-10'>
                <label className='cursor-pointer text-center text-lg font-bold uppercase'>
                  {data.name}
                </label>
              </div>
            </TaskCard>
          </div>
        ))
      }
      <Modal
        title='Yeni Panel Ekle'
        modal={modal}
        setModal={setModal}
        successTitle='Ekle'
        onSubmit={formik.handleSubmit}
      >
        <div className=' p-6 mx-16'>
          <Input label='Ad Giriniz' name='name' invalid={(formik.errors.name ? true : false) && formik.touched.name} error={formik.errors.name} onChange={formik.handleChange} />
        </div>
      </Modal>
    </div >
  )
}

export default index