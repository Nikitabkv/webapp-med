import s from './MainPage.module.scss'
import {Link} from "react-router-dom";

export const MainPage = () => {
  return (
    <div className={s.pageWrapper}>
      <div className={s.logo}>
        <img src={'medical-icon.svg'} alt={'Логотип'}/>
        <h1>МедЭксперт</h1>
      </div>
      <div className={s.select}>
        <button>
          <Link to={'/appointment'}>
            Записаться
          </Link>
        </button>
        <button>
          <Link to={'/review'}>
          Предложение/Жалобы
          </Link>
        </button>
      </div>
      <div className={s.call_wrapper}>
        <span>
          Позвонить нам:
        </span>
        <a href={'tel:880033300800'}>
          <img src={'phone-icon.svg'} alt={'Логотип'}/>
          8-800-333-0-800
        </a>
      </div>
    </div>
  )
}