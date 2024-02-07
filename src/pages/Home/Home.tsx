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
          image: [],
          mission: 'Blah Blah',
          status: 2,
          workerId: 3,
          workerName: 'Abuzer'
        },
        {
          categoryId: 1,
          id: 1,
          title: 'Resmi',
          image: [],
          mission: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah',
          status: 2,
          workerId: 3,
          workerName: 'Abuzer'
        }, {
          categoryId: 1,
          id: 1,
          title: 'Resmi',
          image: [],
          mission: 'Blah Blah',
          status: 2,
          workerId: 3,
          workerName: 'Abuzer'
        }
      ],
    },
    {
      id: 2,
      name: 'In Progress',
      data: []
    },
    {
      id: 3,
      name: 'Complate',
      data: []
    },
    {
      id: 4,
      name: 'Done',
      data: []
    }
  ]
  return (
    <div className="flex flex-row gap-4 pr-6 py-4 h-full">
      {
        categories?.map((category: ICategories, index: number) => (
          <div className="flex-1 bg-red-200 h-full" key={`categories-${index}`} >
            <div className="flex flex-col gap-y-3">
              <div className="flex-1 mb-2">
                <label className="text-2xl text-gray-800 font-medium" >
                  {category.name}
                </label>
              </div>
              {category?.data?.map((task: ITaskCard, index: number) => (
                <div key={`card-${index}`}>
                  <TaskCard task={task} />
                </div>
              ))}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Home