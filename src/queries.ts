import { gql } from "@apollo/client";

export const HELLO = gql`
  query hello {
    hello
  }
`;

export const LOGIN = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
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
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
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
