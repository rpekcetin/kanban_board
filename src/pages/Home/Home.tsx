import { ICategories, ITaskCard } from "./types"
import TaskCard from '../../components/TaskCard'
const Home: React.FC = () => {
  const categories: ICategories[] = [
    {
      id: 1,
      name: 'Open',
      data: [
        {
          categoryId: 1,
          id: 1,
          title: 'Resmi',
          image: 'resim3.jpg',
          mission: 'Blah Blah',
          status: 2,
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
          id: 1,
          title: 'Resmi',
          image: 'resim.jpg',
          mission: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah',
          status: 2,
          startDate: new Date(),
          endDate: new Date(),
          worker: {
            id: 1,
            name: 'Ahmet',
            image: 'Test.jpg'
          }
        }, {
          categoryId: 1,
          id: 1,
          title: 'Resmi',
          image: 'resim2.jpg',
          mission: 'Blah Blah',
          status: 2,
          startDate: new Date(),
          endDate: new Date(),
          worker: {
            id: 1,
            name: 'Ahmet',
            image: 'Test.jpg'
          }
        }, {
          categoryId: 1,
          id: 1,
          title: 'Resmi',
          image: 'resim2.jpg',
          mission: 'Blah Blah',
          status: 2,
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
          categoryId: 1,
          id: 1,
          title: 'Resmi',
          image: 'resim3.jpg',
          mission: 'Blah Blah',
          status: 2,
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
          id: 1,
          title: 'Resmi',
          image: 'resim.jpg',
          mission: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah',
          status: 2,
          startDate: new Date(),
          endDate: new Date(),
          worker: {
            id: 1,
            name: 'Ahmet',
            image: 'Test.jpg'
          }
        }, {
          categoryId: 1,
          id: 1,
          title: 'Resmi',
          image: 'resim2.jpg',
          mission: 'Blah Blah',
          status: 2,
          startDate: new Date(),
          endDate: new Date(),
          worker: {
            id: 1,
            name: 'Ahmet',
            image: 'Test.jpg'
          }
        }, {
          categoryId: 1,
          id: 1,
          title: 'Resmi',
          image: 'resim2.jpg',
          mission: 'Blah Blah',
          status: 2,
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
          categoryId: 1,
          id: 1,
          title: 'Resmi',
          image: 'resim3.jpg',
          mission: 'Blah Blah',
          status: 2,
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
          id: 1,
          title: 'Resmi',
          image: 'resim.jpg',
          mission: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah',
          status: 2,
          startDate: new Date(),
          endDate: new Date(),
          worker: {
            id: 1,
            name: 'Ahmet',
            image: 'Test.jpg'
          }
        }, {
          categoryId: 1,
          id: 1,
          title: 'Resmi',
          image: 'resim2.jpg',
          mission: 'Blah Blah',
          status: 2,
          startDate: new Date(),
          endDate: new Date(),
          worker: {
            id: 1,
            name: 'Ahmet',
            image: 'Test.jpg'
          }
        }, {
          categoryId: 1,
          id: 1,
          title: 'Resmi',
          image: 'resim2.jpg',
          mission: 'Blah Blah',
          status: 2,
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
          categoryId: 1,
          id: 1,
          title: 'Resmi',
          image: 'resim3.jpg',
          mission: 'Blah Blah',
          status: 2,
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
          id: 1,
          title: 'Resmi',
          image: 'resim.jpg',
          mission: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah',
          status: 2,
          startDate: new Date(),
          endDate: new Date(),
          worker: {
            id: 1,
            name: 'Ahmet',
            image: 'Test.jpg'
          }
        }, {
          categoryId: 1,
          id: 1,
          title: 'Resmi',
          image: 'resim2.jpg',
          mission: 'Blah Blah',
          status: 2,
          startDate: new Date(),
          endDate: new Date(),
          worker: {
            id: 1,
            name: 'Ahmet',
            image: 'Test.jpg'
          }
        }, {
          categoryId: 1,
          id: 1,
          title: 'Resmi',
          image: 'resim2.jpg',
          mission: 'Blah Blah',
          status: 2,
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
  ]
  return (
    <div className="flex flex-row gap-4 pr-6 relative py-4 h-full">
      {
        categories?.map((category: ICategories, index: number) => (
          <div className="flex-1 max-h-screen mt-9 overflow-auto" key={`categories-${index}`} >
            <div className="flex flex-col gap-y-3">
              <div className="flex-1 mb-2 absolute top-0">
                <label className="text-2xl text-gray-700 font-bold" >
                  {category.name}
                </label>
              </div>
              <div className="flex gap-3 flex-col">
                {category?.data?.map((task: ITaskCard, index: number) => (
                  <div key={`card-${index}`}>
                    <TaskCard task={task} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Home