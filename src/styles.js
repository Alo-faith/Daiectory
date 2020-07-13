import styled from "styled-components";

export const Header = styled.div`
  /* background-color: #fff4ec; */
  /* background-image: {head}; */
  width: 95%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  img {
    width: 100%;

    padding-bottom: 0px;
  }
`;

export const Title = styled.h1`
  text-align: center;

  padding: 30px;
`;

export const DetailWrapper = styled.div`
  /* display: block; */
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  /* display: flex; */
  margin: 10px;

  p {
    width: 250px;
    height: 50px;
    padding: 10px;
    background-color: #e5e5e5;
    vertical-align: middle;
  }

  h3 {
    font-size: 18px;
  }
`;

export const Contol = styled.div`
  width: 1200px;
  height: 50px;
  background-color: #ede7e3;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2px;
  text-align: right;
  padding-right: 4px;
  display: flex;
`;

export const NavStyled = styled.div`
  /* background-color: grey; */
  width: 90%;
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 24px;
`;

export const Li = styled.li`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
export const SearchStyle = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
  background-color: grey;
`;

export const LikesStyle = styled.img`
  width: 50px;
  height: 50px;

  padding: 1px;
`;
export const LikesDiv = styled.div`
  /* background-color: #e5e5e5; */
  width: 100px;
  height: 30px;
  margin: 5px;
  display: flex;
  padding: 5px;
  margin-left: auto;
  margin-right: auto;

  h5 {
    padding-left: 5px;
    font-size: 18px;
  }
`;

// WandsList Styles
export const Container = styled.div`
  /* margin-left: auto;
  margin-right: auto; */
  width: 100%;
  margin-top: 4px;
  /* text-align: center; */
  background-color: #ede7e3;
  padding: 5px;
`;

export const ListWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 4px;
  text-align: center;
  display: grid;
  margin-top: 10px;
  grid-template-columns: 350px 350px;
  grid-gap: 15px;
  width: 900px;
`;

//.....Bar
export const Bar = styled.nav`
  width: 95%;
  background-color: #2d3142;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
`;

export const Show = styled.img`
  width: 40px;
  height: 36px;
  padding: 0px;
`;

// WandsItem Styles

export const ImageList = styled.div`
  width: 900px;
  padding: 5px;
  display: flex;
`;

export const ListStyle = styled.div`
  padding: 5px;

  /* display: flex; */
  margin-left: auto;
  margin-right: auto;
  width: 400px;

  li {
    font-size: 24px;
    text-align: left;
    color: brown;
  }
`;

export const Img = styled.img`
  width: 300px;
  /* height: 250px; */
  /* border: 2px solid black; */
  padding: 1px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;
// Details Styles

export const WandWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 95%;
  /* height: 800px; */
  background-color: #ede7e3;
  padding-bottom: 5px;
  h1 {
    background-color: #2d3142;
    color: #ffffff;

    height: 80px;
    padding: 10px;
    text-align: center;
  }
  p {
    font-size: 24px;
    padding: 5px;
    text-align: center;
  }

  h6 {
    color: brown;
    text-align: center;
    padding-top: 20px;
    cursor: pointer;
  }
`;

export const BackImage = styled.img`
  width: 150px;
  margin-top: 5px;
  padding: 0px;
  margin-left: 0px;
`;

export const Wondimg = styled.img`
  width: 400px;
  height: 300px;
  border: 2px solid black;
  padding: 1px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const DetailsLikesDiv = styled.div`
  width: 200px;
  height: 30px;
  margin: 5px;
  display: flex;
  padding: 5px;
  margin-left: 200px;

  img {
    width: 45px;
    height: 45px;
    margin-right: 20px;
    padding: 1px;
  }
`;
//  Recomanded

export const RecomandedStyle = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 4px;
  text-align: center;
  display: flex;
  margin-top: 10px;
  background-color: white;
  width: 900px;
  margin-top: 20px;
  padding: 5px;
  border: 1px solid #2d3142;
  img {
    width: 150px;
    border: 2px solid #2d3142;
  }
  h4 {
    font-size: 18px;
  }
`;
