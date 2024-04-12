import React from "react";
import { styled } from "styled-components";
import Signinform from "~components/auth/Signin/Signinform";

function SignIn() {
  return (
    <div>
      {/* <<SignInTitle>Hello</SignInTitle>
      <RedH1>asdas</RedH1>
      <AA>태그 완성</AA>> */}
      <Signinform />
    </div>
  );
}

export default SignIn;

// export const SignInTitle = styled.h1`
//   color: red;
// `;

// export const RedH1 = styled(SignInTitle)`
//   font-size: 24px;
// `;

// export const AA = styled.section`
//   color: red;
// `;
