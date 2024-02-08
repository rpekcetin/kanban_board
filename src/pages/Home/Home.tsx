import { ICategories, ITaskCard } from "./types"
import TaskCard from '../../components/TaskCard'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { useState } from "react"
import Modal from "../../components/Modal"
import DropDown from "../../components/DropDown"
const Home: React.FC = () => {
  const [categories, setCategories] = useState<ICategories[]>([
    {
      id: 1,
      name: 'Open',
      data: [
        {
          categoryId: 1,
          id: 12,
          title: 'Resmi',
          image: 'resim3.jpg',
          mission: 'Blah Blah',
          status: [2],
          startDate: new Date(),
          endDate: new Date(),
          worker: {
            id: 1,
            name: 'Ahmet',
            image: 'Test.jpg'
          }
        },
        {
          categoryId: 1,
          id: 13,
          title: 'Resmi',
          image: 'resim.jpg',
          mission: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah',
          status: [2],
          startDate: new Date(),
          endDate: new Date(),
          worker: {
            id: 1,
            name: 'Ahmet',
            image: 'Test.jpg'
          }
        }, {
          categoryId: 1,
          id: 14,
          title: 'Resmi',
          image: 'resim2.jpg',
          mission: 'Blah Blah',
          status: [2],
          startDate: new Date(),
          endDate: new Date(),
          worker: {
            id: 1,
            name: 'Ahmet',
            image: 'Test.jpg'
          }
        }, {
          categoryId: 1,
          id: 15,
          title: 'Resmi',
          image: 'resim2.jpg',
          mission: 'Blah Blah',
          status: [2],
          startDate: new Date(),
          endDate: new Date(),
          worker: {
            id: 1,
            name: 'Ahmet',
            image: 'Test.jpg'
          }
        }
      ],
    },
    {
      id: 2,
      name: 'In Progress',
      data: [
        {
          categoryId: 2,
          id: 16,
          title: 'Resmi',
          image: 'resim3.jpg',
          mission: 'Blah Blah',
          status: [2],
          startDate: new Date(),
          endDate: new Date(),
          worker: {
            id: 1,
            name: 'Ahmet',
            image: 'Test.jpg'
          }
        },
        {
          categoryId: 2,
          id: 17,
          title: 'Resmi',
          image: 'resim.jpg',
          mission: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah',
          status: [2],
          startDate: new Date(),
          endDate: new Date(),
          worker: {
            id: 1,
            name: 'Ahmet',
            image: 'Test.jpg'
          }
        }, {
          categoryId: 2,
          id: 18,
          title: 'Resmi',
          image: 'resim2.jpg',
          mission: 'Blah Blah',
          status: [2],
          startDate: new Date(),
          endDate: new Date(),
          worker: {
            id: 1,
            name: 'Ahmet',
            image: 'Test.jpg'
          }
        }, {
          categoryId: 2,
          id: 19,
          title: 'Resmi',
          image: 'resim2.jpg',
          mission: 'Blah Blah',
          status: [2],
          startDate: new Date(),
          endDate: new Date(),
          worker: {
            id: 1,
            name: 'Ahmet',
            image: 'Test.jpg'
          }
        }
      ],
    },
    {
      id: 3,
      name: 'Complate',
      data: [
        {
          categoryId: 3,
          id: 21,
          title: 'Resmi',
          image: 'resim3.jpg',
          mission: 'Blah Blah',
          status: [3],
          startDate: new Date(),
          endDate: new Date(),
          worker: {
            id: 1,
            name: 'Ahmet',
            image: 'Test.jpg'
          }
        },
        {
          categoryId: 3,
          id: 22,
          title: 'Resmi',
          image: 'resim.jpg',
          mission: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah',
          status: [1],
          startDate: new Date(),
          endDate: new Date(),
          worker: {
            id: 1,
            name: 'Ahmet',
            image: 'Test.jpg'
          }
        }, {
          categoryId: 3,
          id: 23,
          title: 'Resmi',
          image: 'resim2.jpg',
          mission: 'Blah Blah',
          status: [2],
          startDate: new Date(),
          endDate: new Date(),
          worker: {
            id: 1,
            name: 'Ahmet',
            image: 'Test.jpg'
          }
        }, {
          categoryId: 3,
          id: 24,
          title: 'Resmi',
          image: 'resim2.jpg',
          mission: 'Blah Blah',
          status: [2],
          startDate: new Date(),
          endDate: new Date(),
          worker: {
            id: 1,
            name: 'Ahmet',
            image: 'Test.jpg'
          }
        }
      ],
    },
    {
      id: 4,
      name: 'Done',
      data: [
        {
          categoryId: 4,
          id: 25,
          title: 'Resmi',
          image: 'resim3.jpg',
          mission: 'Blah Blah',
          status: [2],
          startDate: new Date(),
          endDate: new Date(),
          worker: {
            id: 1,
            name: 'Ahmet',
            image: 'Test.jpg'
          }
        },
        {
          categoryId: 4,
          id: 26,
          title: 'Resmi',
          image: 'resim.jpg',
          mission: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah',
          status: [2],
          startDate: new Date(),
          endDate: new Date(),
          worker: {
            id: 1,
            name: 'Ahmet',
            image: 'Test.jpg'
          }
        }, {
          categoryId: 4,
          id: 27,
          title: 'Resmi',
          image: 'resim2.jpg',
          mission: 'Blah Blah',
          status: [2],
          startDate: new Date(),
          endDate: new Date(),
          worker: {
            id: 1,
            name: 'Ahmet',
            image: 'Test.jpg'
          }
        }, {
          categoryId: 4,
          id: 28,
          title: 'Resmi',
          image: 'resim2.jpg',
          mission: 'Blah Blah',
          status: [2],
          startDate: new Date(),
          endDate: new Date(),
          worker: {
            id: 1,
            name: 'Ahmet',
            image: 'Test.jpg'
          }
        }
      ],
    }
  ])
  const handleDropDrag = (event: any) => {
    const fromCategoryId = Number(event.source.droppableId.replace('task-drop-', ''));
    const toCategoryId = Number(event.destination?.droppableId.replace('task-drop-', ''));
    const fromIndex = event.source.index;
    const toIndex = event.destination?.index;

    if (typeof toCategoryId === 'undefined' || typeof toIndex === 'undefined') return
    setCategories((prevCategories: ICategories[]) => {
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