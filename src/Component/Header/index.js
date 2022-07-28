import "./index.css";

const Header = () => {
  return (
    <div class="header">
      <div class="headerRow headerLogo">
        <p>آکادمی کدنویسی بحر </p>
      </div>
      <div class="headerRow headerNavbar">
        <p> ارتباط با ما </p>
        <p> خدمات </p>
        <p> مالی </p>
        <p> آموزش </p>
        <p> خانه </p>
      </div>
      <div class="headerRow headerLogin">
        <div class="loginUser"></div>
        <div class="loginSearch"></div>
      </div>
    </div>
  );
};

export { Header };
