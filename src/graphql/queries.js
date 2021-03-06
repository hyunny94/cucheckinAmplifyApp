/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      Name
      Category
      ImageURL
      Address
      Latitude
      Longitude
      Notes
      AKA
      Cap
      CurrOccupancy
      IsOpen
      CheckedInUsers {
        items {
          id
          CheckedInLocationId
          IsAdmin
          Email
          UserName
          PhoneNumber
          UserPoolId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        Category
        ImageURL
        Address
        Latitude
        Longitude
        Notes
        AKA
        Cap
        CurrOccupancy
        IsOpen
        CheckedInUsers {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      CheckedInLocationId
      IsAdmin
      Email
      UserName
      PhoneNumber
      UserPoolId
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        CheckedInLocationId
        IsAdmin
        Email
        UserName
        PhoneNumber
        UserPoolId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
