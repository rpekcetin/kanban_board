import { ICategories, ITaskCard } from "./types/types"
import TaskCard from '../../components/TaskCard'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { useEffect, useState } from "react"
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
const Home: React.FC = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [modal, setModal] = useState<boolean>(false)
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
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
    title: Yup.string().required('Lütfen Başlık Giriniz !')
  })

  const formik: any = useFormik({
    initialValues: {
      title: '',
      mission: '',
      categoryId: '',
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
                        setModal(!modal)
                        setSelectedCategory(category.id)
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
            <Input label='Görev Adı' type="text" name='name' invalid={formik.errors.name ? true : false && formik.touched.name} error={formik.errors.name} onChange={formik.handleChange} />
          </div>
          <div className=''>
            <Input label='Açıklama' type="textarea" name='mission' invalid={formik.errors.name ? true : false && formik.touched.name} error={formik.errors.name} onChange={formik.handleChange} />
          </div>
          <div className=''>
            <Input label='Görev Başlangıç' type="date" name='startDate' invalid={formik.errors.name ? true : false && formik.touched.name} error={formik.errors.name} onChange={formik.handleChange} />
          </div>
          <div className=''>
            <Input label='Görev Bitiş' type="date" name='endDate' invalid={formik.errors.name ? true : false && formik.touched.name} error={formik.errors.name} onChange={formik.handleChange} />
          </div>
          <div className=''>
            <Input label='Görev Türü' name='state' invalid={formik.errors.name ? true : false && formik.touched.name} error={formik.errors.name} onChange={formik.handleChange} />
          </div>
          <div className=''>
            <Input label='Ek Resim' type="file" name='image' invalid={formik.errors.name ? true : false && formik.touched.name} error={formik.errors.name} onChange={formik.handleChange} />
          </div>
        </div>
      </Modal>
    </div >
  )
}

export default Home