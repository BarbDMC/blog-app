
import './styles.css';
import { useLocation } from "react-router-dom";

export const Profile = () => {
  const { state } = useLocation();
  const { name, middleName, surname, secondSurname, email, birthday } = state;
  const formatBirthday = birthday.substring(0, 10);

  return (
    <section className="profile-background">
      <div className="profile-container">
        <div>
          <div className="relative">
            <div className="profile-image-container">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div className="profile-info-container">
          <h1 className="profile-info-container__name">{name} {middleName} {surname} {secondSurname}</h1>
          <p className="profile-info-container__data"><span className="font-bold">Birth Day:</span> {formatBirthday}</p>
          <p className="profile-info-container__data"><span className="font-bold">Email:</span> {email}</p>
        </div>

        <div className="microposts-list-container">
          <h2 className="microposts-list-container__title">Microposts</h2>
        </div>
      </div>
    </section>
  );
}