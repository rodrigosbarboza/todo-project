const ulElement = document.querySelector('#tasks ul')
const tasks = []

function removeTask(index) {
  tasks.splice(index, 1)
  const taskElement = document.querySelector(`#tasks li#item-${index}`)
  ulElement.removeChild(taskElement)
}

function addTask(text) {
  const total = tasks.push(text)
  const index = total - 1

  const taskElement = document.createElement('li')
  const textElement = document.createElement('span')
  const btnElement = document.createElement('button')

  taskElement.setAttribute('id', `item-${index}`)

  btnElement.onclick = () => removeTask(index)

  taskElement.appendChild(textElement)
  taskElement.appendChild(btnElement)

  textElement.innerHTML = text
  btnElement.innerHTML = 'Remover'

  ulElement.appendChild(taskElement)
}

const btnElemet = document.querySelector('#form button')
const inputElemet = document.querySelector('#form input')

btnElemet.onclick = () => {
  if (inputElemet.value) {
    addTask(inputElemet.value)
    inputElemet.value = ''
  }
}
