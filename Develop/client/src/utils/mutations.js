import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    profile {
      _id
      name
    }
  }
}
`;

export const ADD_USER =gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(name: $name, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}
`;

export const SAVE_BOOK= gql`
  mutation saveBook($bookId: ID!, $authors: [String!], $description: String, $title: String!, $image: String, $link: String ) {
    saveBook(bookId: $bookID, authors: $authors, description: $description, title: $title, image: $image, link: $link ) {
      _id
      username
      savedBooks
    }
  }
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookID: ID) {
  removeSkill(bookID: $bookID) {
    _id
    name
    savedBooks
  }
}
`;
