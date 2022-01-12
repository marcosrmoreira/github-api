import React from "react";
import * as S from "./styled";

const Profile = () => {
  return (
    <S.Wrapper>
      <S.WrapperImage
        src="https://avatars.githubusercontent.com/u/48301925?v=4"
        alt="Avatar of user"
      />
      <S.WrapperInfoUser>
        <div>
          <h1>Marcos Moreira</h1>
          <S.WrapperUserName>
            <h3>Username: </h3>
            <a href="https://github.com/marcosrmoreira" target="_blank" rel="noreferrer">marcosrmoreira</a>
          </S.WrapperUserName>
        </div>

        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>5</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
