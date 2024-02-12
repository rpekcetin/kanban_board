import { ICategories, ITaskCard } from "./types/types"
import TaskCard from '../../components/TaskCard'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { ChangeEvent, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { HomeTypes } from "./store/types"
import moment from "moment"
import Button from '../../components/Button'
import { ClockIcon } from "@heroicons/react/24/outline"
import Modal from "../../components/Modal"
import Input from '../../components/Input'
import { useFormik } from "formik"
import * as Yup from 'yup'
import { useParams } from "react-router-dom"
import { DropDown, Item } from "../../components/DropDown"
const Home: React.FC = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [modal, setModal] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(false)
  const categories: any = useSelector((state: any) => state?.HomeSlice?.tasksFake)

  useEffect(() => {
    dispatch({
      type: HomeTypes.GET_TASKS,
      payload: {
        id
      }
    })
  }, [id])


  const validationSchema = Yup.object({
    title: Yup.string().required('Lütfen Başlık Giriniz !'),
    mission: Yup.string().required('Lüften Açıklama Giriniz !'),
    categoryId: Yup.number().required('Lüften Açıklama Giriniz !'),
    state: Yup.string().required('Lütfen Iş Türü Seçiniz !'),
    image: Yup.mixed().test(
      "fileType",
      "Yanlış dosya türü",
      (value: any) => !value || (value && ["image/jpeg", "image/png", "image/webp"].includes(value?.type))
    ),
    endDate: Yup.date().required('Lütfen Bitiş Tarihi Seçiniz !'),
    startDate: Yup.date().required('Lütfen Başlangıç Tarihi Seçiniz !')
  })

  const formik: any = useFormik({
    initialValues: {
      title: '',
      panel_id: id,
      mission: '',
      categoryId: '',
      state: '',
      image: '',
      endDate: moment().format('YYYY-MM-DD'),
      startDate: moment().format('YYYY-MM-DD'),
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch({
        type: HomeTypes.POST_TASKS,
        payload: values
      })
    }
  })

  const handleDropDrag = (event: any) => {
    const fromCategoryId: number | undefined = Number(event.source.droppableId.replace('task-drop-', ''));
    const toCategoryId: number | undefined = Number(event.destination?.droppableId.replace('task-drop-', ''));
    const fromIndex: number | undefined = event.source.index;
    const toIndex: number | undefined = event.destination?.index;

    if (typeof toCategoryId === 'undefined' || typeof toIndex === 'undefined' || typeof fromIndex === 'undefined') return
    dispatch({
      type: HomeTypes.UPDATE_TASKS,
      payload: {
        fromCategoryId,
        toCategoryId,
        fromIndex,
        toIndex
      }
    })
  };
  return (
    <div className="flex flex-row gap-4 pr-6 relative py-4 h-full">
      <DragDropContext onDragEnd={(e) => handleDropDrag(e)}>
        {categories?.map((category: ICategories, categoryIndex: number) => (
          <Droppable droppableId={`task-drop-${category.id}`} key={`categories-${categoryIndex}`}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="flex-1 max-h-screen mt-9 overflow-auto">
                <div className="flex flex-col gap-y-3">
                  <div className="flex-1 mb-2 absolute top-0">
                    <label className="text-2xl text-gray-700 font-bold">
                      {category.name}
                    </label>
                  </div>
                  <div className="flex gap-3 flex-col">
                    {category?.data?.map((task: ITaskCard, taskIndex: number) => (
                      <Draggable draggableId={`task-${task.id}`} key={`task-${task.id}`} index={taskIndex}>
                        {(provided) => (
                          <div
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            ref={provided.innerRef}

                          >
                            <TaskCard isMenu={true} task={task} >
                              <div className={`px-4`}>
                                <div className={`mt-4`}>
                                  {
                                    task?.status?.map((stats: number, index: number) => (
                                      <div key={`status-button-${index}`}>
                                        <Button
                                          stats={stats}
                                        />
                                      </div>
                                    ))
                                  }
                                </div>
                                <div className={`w-full mt-3`}>
                                  <div className='w-full'>
                                    <div className="bg-no-repeat rounded-lg bg-cover bg-bottom w-full h-44" style={{ backgroundImage: `url('/image/example-1.webp')` }} />
                                  </div>
                                </div>
                                <div className='mt-5 pb-4 w-full flex flex-row items-center justify-between'>
                                  <div className=''>
                                    <div className="bg-no-repeat rounded-full bg-cover w-11 h-11" style={{ backgroundImage: `url('/image/profile.jpg')` }} />
                                  </div>
                                  <div className={`gap-1 flex items-center justify-end`}>
                                    <ClockIcon className='h-6 w-6 stroke-gray-600' />
                                    <p className='text-sm text-gray-600 font-semibold'>
                                      {`${moment(task.endDate).format('DD')}-${moment(task.startDate).format('DD')} ${moment(task.endDate).format('MMM')}`}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </TaskCard>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                  <div>
                    <Button
                      onClick={() => {
                        formik.setFieldValue('categoryId', category.id)
                        setModal(!modal)
                      }}
                      name="Yeni Kart Ekle"
                      classes="cursor-pointer w-full py-5 border-dashed border-2 rounded-md border-gray-400 "
                    />
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        ))
        }
      </DragDropContext >
      <Modal
        title='Yeni Görev Ekle'
        modal={modal}
        setModal={setModal}
        successTitle='Ekle'
        onSubmit={formik.handleSubmit}
      >
        <div className="grid grid-cols-2 gap-x-5">
          <div className=''>
            <Input label='Görev Adı' type="text" name='title' value={formik.values.title} invalid={(formik.errors.title ? true : false) && formik.touched.title} error={formik.errors.title} onChange={formik.handleChange} />
          </div>
          <div className=''>
            <Input label='Açıklama' type="textarea" name='mission' value={formik.values.mission} invalid={(formik.errors.mission ? true : false) && formik.touched.mission} error={formik.errors.mission} onChange={formik.handleChange} />
          </div>
          <div className=''>
            <Input label='Görev Başlangıç' type="date" name='startDate' value={formik.values.startDate} invalid={(formik.errors.startDate ? true : false) && formik.touched.startDate} error={formik.errors.startDate} onChange={formik.handleChange} />
          </div>
          <div className=''>
            <Input label='Görev Bitiş' type="date" name='endDate' value={formik.values.endDate} invalid={(formik.errors.endDate ? true : false) && formik.touched.endDate} error={formik.errors.endDate} onChange={formik.handleChange} />
          </div>
          <div className=''>
            <Input label='Görev Türü' name='state' value={formik.values.state} invalid={(formik.errors.state ? true : false) && formik.touched.state} error={formik.errors.state} onChange={formik.handleChange} />
          </div>
          <div className=''>
            <Input label='Ek Resim' type="file" name='image' value={formik.values.image} invalid={(formik.errors.image ? true : false) && formik.touched.image} error={formik.errors.image} onChange={(event: ChangeEvent<HTMLInputElement>) => {
              if (event.target.files && event.target.files.length > 0) {
                const file = event.target.files[0];
                formik.setFieldValue("image", file);
              }
            }} />
          </div>
        </div>
      </Modal>
    </div >
  )
}

export default Home