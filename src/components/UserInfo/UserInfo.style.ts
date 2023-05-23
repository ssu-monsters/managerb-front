import css from 'styled-jsx/css';

export default css`
  .container {
    width: 700px;
    height: 300px;
    margin: auto;
    display: flex;
    align-items: center;
  }
  .user-image {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: #d9d9d9;
  }

  .user-info {
    width: 300px;
    height: 245px;
    background-color: white;
    margin-left: 100px;
    font-family: 'NanumSquare Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    color: #282828;
  }

  .user-info .name {
    font-size: 25px;
    line-height: 40px;
    color: #101010;
  }

  .user-info .user-semi-info {
    height: 167px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 38px;
  }

  .user-info .semi {
    display: flex;
  }

  .email {
    display: flex;
    align-items: center;
    margin-right: 55px;
  }

  .indentity {
    display: flex;
    align-items: center;
    margin-right: 70px;
  }
  .age {
    display: flex;
    align-items: center;
    margin-right: 70px;
  }

  .user-info .text {
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;

    color: #282828;
  }
`;