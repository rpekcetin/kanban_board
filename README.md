
# Kanban Board

This is an example kanban board project. You can create tasks by adding a new panel and transfer the tasks to different columns by dragging them.


## Getting Started

To run this project locally, clone the repository and install the dependencies:

```bash
git clone https://github.com/rpekcetin/kanban_board.git
cd kanban_board
npm install
npm start
```
## API Reference

#### Get all category and tasks

```http
  GET /category/:panel_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `panel_id` | `string` | You can fetch all task data |

#### Post Task

```http
  POST /task/post
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Task title |
| `panel_id`      | `string` | **Required**. ID of the panel to be added |
| `mission`      | `string` | **Required**. Task description |
| `categoryId`      | `string` | **Required**. ID of the category to be added |
| `endDate`      | `Date` | **Required**. Task due date |
| `startDate`      | `Date` | **Required**. Task start date |
| `image`      | `File` | **Required**. Task image if you want to add |
| `status`      | `string` | **Required**. Parameter indicating which category the task is in |
| `position`      | `number` | **Required**. The order of the task in the column default value is 0 |

#### Update Task Position

```http
  PUT /task/update
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `data`      | `string` | **Required**. Sorting and resending all data of the added and removed categories |

#### Delete Task

```http
  Delete /task/delete
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `task_id`      | `string` | **Required**. ID of the task you want to delete|

#### Get all panels

```http
  GET /panel
```

#### Post Panel

```http
  POST /panel/post
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Enter panel name |

#### Delete Panel

```http
  Delete /panel/delete/_id
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `_id`      | `string` | **Required**. ID of the panel you want to delete|

## Tech Stack

**Client:** React, ReduxSaga, Redux ToolKit, Redux, TailwindCSS, react-beautiful-dnd

**Server:** Node, Express

**Deploy:** Render, Vercel


## Screenshots


**Add Panel**

You can create a new panel from this model by clicking the add option in this area.

![App Screenshot](https://rpekcetin.github.io/kanban_2.jpg)

**Add Task**

After creating a new panel and clicking inside, you can create a new task by clicking on the add new card under each column.

![App Screenshot](https://rpekcetin.github.io/kanban_3.jpg)

**Delete Task**

Optionally, you can delete the selected card from the three dots on the cards.

![App Screenshot](https://rpekcetin.github.io/kanban_1.jpg)

