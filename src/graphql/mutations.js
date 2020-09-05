/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
          LocationID
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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
          LocationID
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
          LocationID
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      LocationID
      CheckedInLocation {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      LocationID
      CheckedInLocation {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      LocationID
      CheckedInLocation {
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
      createdAt
      updatedAt
    }
  }
`;
