import css from 'styled-jsx/css';

export default css`
  .header {
    width: 100%;
    height: 238px;
    background: linear-gradient(
      180deg,
      #7876fc 55.06%,
      rgba(92, 89, 240, 0) 161.31%
    );
    display: flex;
    align-items: center;
  }

  .title {
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 44px;
    color: #ffffff;
    margin-left: 160px;
  }

  .container {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    display: flex;

    flex-direction: column;
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    align-items: center;
    padding: 0 20px;
    margin-top: 60px;
  }
  .input-tag {
    width: 100%;
  }

  .text {
    width: 900px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }

  .input {
    width: 100%;
    max-width: 800px;
    height: 35px;
    font-size: 13px;
    font-weight: 400;
    border: 0;
    border-radius: 10px;
    outline: none;
    padding-left: 10px;
    background-color: #efefef;
    font-family: 'NanumSquareNeo';
  }

  .text-area {
    margin-bottom: 20px;
  }

  textarea {
    width: 900px;
    height: 18rem;
    /*border: 2px solid #5c59f0;*/
    border: none;
    border-radius: 5px;
    resize: none;
    background-color: #efefef;
    margin-bottom: 30px;
    padding: 15px;
    font-family: 'NanumSquareNeo';
  }

  label {
    display: flex;
    align-items: center;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;

    color: #282828;
  }

  input:focus {
    outline: none;
  }

  .thumnail-img {
    margin-bottom: 30px;
  }
  .inner-img {
    display: flex;
    margin-top: 30px;
  }
  .add-image {
    width: 330px;
    height: 400px;
    background-color: #efefef;
    opacity: 0.5;
    border-radius: 5px;
    margin-right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .add-image .add {
    display: flex;
    margin: auto;
    padding-top: 100px;
    cursor: pointer;
  }

  .img-text {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    margin-top: 40px;
  }

  .btn {
    width: 350px;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 100px;
  }

  .btn .okay {
    background: #5c59f0;
    color: #ffffff;
    width: 160px;
    height: 35px;
    border-radius: 50px;
    border: 0;
    cursor: pointer;
  }
  .btn .no {
    border: 1px solid #5c59f0;
    color: #5c59f0;
    width: 160px;
    height: 35px;
    border-radius: 50px;
    border: 0;
    cursor: pointer;
  }

  .recruit-date {
    width: 800px;
    display: flex;
    text-align: center;
    display: flex;
    align-items: center;
  }
  .flow {
    margin: 0 15px;
  }
  .day {
    width: 20%;
    height: 35px;
    border: 0;
    border-radius: 10px;
    background-color: #efefef;
    cursor: pointer;
    align-items: center;
    display: flex;
    position: relative;
    justify-content: center;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
    color: #818181;
  }
`;
