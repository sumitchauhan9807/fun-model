import { gql } from "@apollo/client";

export const HELLO = gql`
  query hello {
    hello
  }
`;

export const LOGIN = gql`
  mutation modelLogin($data: LoginInput!) {
    modelLogin(data: $data) {
      user {
        id
        email
        username
        name
      }
      token
    }
  }
`;

export const REGISTER = gql`
  mutation modelRegister($data: RegisterInput!) {
    modelRegister(data: $data) {
      user {
        id
        email
        username
        name
      }
      token 
    }
  }
`;
