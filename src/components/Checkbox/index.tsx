import { ChangeEvent } from 'react';
import sunIcon from './assets/sun.svg';
import moonIcon from './assets/moon.svg';
import './styles.css'

export function Checkbox() {
  function handleChangeCheckbox(event: ChangeEvent<HTMLInputElement>) {
    const body = document.querySelector('body');
    if (event.target.checked) {
      body?.classList.add('dark')
    } else {
      body?.classList.remove('dark')
    }
  }
  return (
    <label htmlFor="night-light-checkbox" className='night-light-label'>
      <input
        type="checkbox"
        id="night-light-checkbox"
        onChange={handleChangeCheckbox}
      />
      <span className="night-light-ball"></span>
      <img className="sun-svg" src={sunIcon} alt="Sun" />
      <img className="moon-svg" src={moonIcon} alt="Moon" />
    </label>
  )
}

