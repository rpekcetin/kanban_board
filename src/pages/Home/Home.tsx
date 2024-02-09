import { ICategories, ITaskCard } from "./types"
import TaskCard from '../../components/TaskCard'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { useState } from "react"
import Modal from "../../components/Modal"
import DropDown from "../../components/DropDown"
import { useDispatch, useSelector } from "react-redux"
import { HomeTypes } from "./store/types"
const Home: React.FC = () => {
  const dispatch = useDispatch()
  const categories: any = useSelector((state: any) => state?.HomeSlice?.tasks)
  const [category, setCategory] = useState(categories)
  const handleDropDrag = (event: any) => {
    const fromCategoryId: number | undefined = Number(event.source.droppableId.replace('task-drop-', ''));
    const toCategoryId: number | undefined = Number(event.destination?.droppableId.replace('task-drop-', ''));
    const fromIndex: number | undefined = event.source.index;
    const toIndex: number | undefined = event.destination?.index;
    const newList: any = []

    if (typeof toCategoryId === 'undefined' || typeof toIndex === 'undefined' || typeof fromIndex === 'undefined') return
    setCategory((prevCategories: ICategories[]) => {
      const fromCategory: any = prevCategories.find(category => category.id === fromCategoryId);
      const taskMoving = fromCategory?.data[fromIndex];
      if (!taskMoving) {
        return prevCategories;
      }
      const newCategories: any = prevCategories.map((category: any) => ({
        ...category,
        data: category.data.filter((el: any, index: number) => category.id !== fromCategoryId || index !== fromIndex), // Eski konumdan kartı çıkar
      }));
      const categoryIndex = newCategories.findIndex((category: any) => category.id === toCategoryId);
      if (categoryIndex !== -1) {
        newCategories[categoryIndex].data.splice(toIndex, 0, { ...taskMoving, categoryId: toCategoryId });
      }
      return newCategories;
    });
    dispatch({
      type: HomeTypes.UPDATE_TASKS,
      payload: {
        fromCategoryId,
        toCategoryId,
        fromIndex,
        toIndex
      }
    })
    categories.map((data: any, index: number) => {
      newList.push({
        id: data.id,
        name: data.name,
        data: [
          ...data.data.map((dataTask: any, index: number) => {
            return ({
              ...dataTask,
              position: index + 1
            })
          })
        ]
      })
    })
    console.log(newList)


  };

  return (
    <div className="flex flex-row gap-4 pr-6 relative py-4 h-full">
      {/* <Modal />
      <DropDown /> */}
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
                            <TaskCard task={task} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        ))
        }
      </DragDropContext >

    </div >
  )
}

export default Home