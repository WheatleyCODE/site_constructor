import { Block } from './classes/blocks'
import {model} from './model'
import './styles/main.css'

const $site = document.querySelector('#site')

model.forEach(block => {
  $site.insertAdjacentHTML('beforeend', block.toHTML())
})

