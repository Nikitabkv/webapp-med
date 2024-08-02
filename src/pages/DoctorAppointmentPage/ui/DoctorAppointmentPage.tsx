export const DoctorAppointmentPage = () => {
  return (
    <form>
      <label>
        <p>Выберите тип услуги</p>
        <select>
          <option>Тип услуги 1</option>
          <option>Тип услуги 2</option>
          <option>Тип услуги 3</option>
        </select>
      </label>
      <label>
        <p>Выберите услугу</p>
        <select>
          <option>Услуга 1</option>
          <option>Услуга 2</option>
          <option>Услуга 3</option>
        </select>
      </label>
      <label>
        <p>Выберите Врача</p>
        <select>
          <option>Врач 1</option>
          <option>Врач 2</option>
          <option>Врач 3</option>
        </select>
      </label>
      <label>
        <p>Ваше полное ФИО</p>
        <input type="text"/>
      </label>
      <label>
        <p>Ваша адресс</p>
        <input type="text"/>
      </label>
      <label>
        <p>Ваш телефон</p>
        <input type="text"/>
      </label>
    </form>
  )
};