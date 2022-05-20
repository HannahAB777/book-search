import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const ADD_USER =gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const SAVE_BOOK= gql`
  mutation saveBook($bookId: ID!, $authors: [String!], $description: String, $title: String!, $image: String, $link: String ) {
    saveBook(bookId: $bookId, authors: $authors, description: $description, title: $title, image: $image, link: $link ) {
      _id
      username
      savedBooks{
        bookId
        title
        authors
        link
        description
        image
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID) {
  removeBook(bookId: $bookId) {
    _id
    name
    savedBooks{
      bookId
      title
      authors
      link
      description
      image
    }
  }
}
`;
