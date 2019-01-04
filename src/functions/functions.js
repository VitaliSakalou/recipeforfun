import React from 'react'
import BeefIcon from '../icons/foodIcons/beefIcon'
import ChickenIcon from '../icons/foodIcons/chickenIcon'
import DesertIcon from '../icons/foodIcons/desertIcon'
import LambIcon from '../icons/foodIcons/lambIcon'
import MiscellaneousIcon from '../icons/foodIcons/miscellaneousIcon'
import PastaIcon from '../icons/foodIcons/pastaIcon'
import PorkIcon from '../icons/foodIcons/porkIcon'
import SeafoodIcon from '../icons/foodIcons/seafoodIcon'
import SideIcon from '../icons/foodIcons/sideIcon'
import StarterIcon from '../icons/foodIcons/starterIcon'
import VeganIcon from '../icons/foodIcons/veganIcon'
import VegetarianIcon from '../icons/foodIcons/vegetarianIcon'

function getCountryFlag(country) {
  switch (country) {
    case 'American':
      return 'us'
    case 'British':
      return 'gb'
    case 'Canadian':
      return 'ca'
    case 'Chinese':
      return 'cn'
    case 'Dutch':
      return 'de'
    case 'French':
      return 'fr'
    case 'Greek':
      return 'gr'
    case 'Indian':
      return 'in'
    case 'Irish':
      return 'ie'
    case 'Italian':
      return 'it'
    case 'Jamaican':
      return 'jm'
    case 'Japanese':
      return 'jp'
    case 'Malaysian':
      return 'my'
    case 'Mexican':
      return 'mx'
    case 'Moroccan':
      return 'ma'
    case 'Russian':
      return 'ru'
    case 'Spanish':
      return 'es'
    case 'Thai':
      return 'th'
    case 'Vietnamese':
      return 'vn'
    case 'Unknown':
      return 'aq'
    default:
      return null
  }
}

function getFoodIcon(category) {
  switch (category) {
    case 'Beef':
      return <BeefIcon />
    case 'Chicken':
      return <ChickenIcon />
    case 'Desert':
      return <DesertIcon />
    case 'Lamb':
      return <LambIcon />
    case 'Miscellaneous':
      return <MiscellaneousIcon />
    case 'Pasta':
      return <PastaIcon />
    case 'Pork':
      return <PorkIcon />
    case 'Seafood':
      return <SeafoodIcon />
    case 'Side':
      return <SideIcon />
    case 'Starter':
      return <StarterIcon />
    case 'Vegan':
      return <VeganIcon />
    case 'Vegetarian':
      return <VegetarianIcon />
    default:
      return null
  }
}

function getPhrase(key) {
  switch (key) {
    case 0:
      return 'Surprise me!'
    case 1:
      return 'Give me another one!'
    case 2:
      return 'Ok. One more!'
    case 3:
      return 'I give you the last chance!'

    default:
      return ''
  }
}

export { getCountryFlag, getFoodIcon, getPhrase }
