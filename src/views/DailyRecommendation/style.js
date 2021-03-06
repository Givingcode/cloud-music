import styled from 'styled-components';

export const Top = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 8;
  overflow: hidden;
  height: 3rem;
  padding: 0 0.5rem;
  span{
    opacity: 0;
  }
  .topContent{
    height: 3rem;
    line-height: 3rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .iconfont{
    font-size: 1.2rem;
  }
  img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 14rem;
    z-index: 9;
  }
  .circle{
    width:2rem;
    height: 2rem;
    background: slategray;
    border-radius: 50%;
  }
`
export const Control = styled.div`
  position: fixed;
  top: 9.7rem;
  left: 0;
  height: 3rem;
  line-height: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  background: #fff;
  z-index: 8;
  padding: 0 0.5rem;
  .iconfont{
    font-size: 1.2rem;
  }
  span{
    font-size: 0.9rem;
    margin: 0 0.2rem;
  }
`
export const Bg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 14rem;
  width: 100%;
  z-index: 6;
  overflow: hidden;
  background: url(${(props) => props.img}) no-repeat;
  background-size: cover;
`
export const Container = styled.div`
  position: fixed;
  top: 0;
  padding-bottom: 3rem;
  width: 100%;
  height: 100%;
  z-index: 7;
`
export const Content = styled.div`
  .out{
    padding-top:12rem;
    position: relative;
    .date{
      position: absolute;
      top: 6rem;
      color: #fff;
      font-size: 2rem;
      span{
        font-size: 1rem;
      }
    }
  }
`
